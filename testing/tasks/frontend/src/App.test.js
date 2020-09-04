//const puppeteer = require('puppeteer');

// IIFE
//(async () => {
  //const browser = await puppeteer.launch()
  //const incognito = await browser.createIncognitoBrowserContext()
  //const page = await browser.newPage()
  
  //await page.goto('http://www.google.com/')

  //await page.waitForSelector('input.gLFyf.gsfi')
  //await page.type('input.gLFyf.gsfi', 'hola mundo', { delay: 100 })
  //await page.click('input.gNO89b')
  
  //await page.screenshot({ path: './screenshot.png' })
  
  //await browser.close()
//})()

import puppeteer from 'puppeteer'

describe('App', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, sloMo: 250 })
  })

  afterAll(async () => {
    await browser.close()
  })

  it(
    'should redirect to home after successfully signing up',
    async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000')

      await page.waitForSelector('[href="/signup"]')
      await page.click('[href="/signup"]')

      await page.waitForSelector('#email')
      await page.type('#email', 'test8@test.com', { delay: 100 })
      await page.type('#password', '12345', { delay: 100 })
      await page.click('button')

      await page.waitForSelector('.tasks > p')
      const msg = await page.$eval('.tasks > p', el => el.innerHTML)
      expect(msg).toMatch('No tasks created yet.')
    }
  )

  it(
    'should create task and list the user\'s tasks',
    async () => {
      const page = await browser.newPage()

      await page.goto('http://localhost:3000/create')
      
      await page.waitForSelector('#name')
      await page.type('#name', 'task 1', { delay: 100 })
      await page.click('button')

      await page.waitForSelector('.success-message')
      const message = await page.$eval('.success-message', el => el.innerHTML)

      expect(message).toMatch(/task created successfully/i)

      await page.reload()
      await page.waitForSelector('#name')
      await page.type('#name', 'task 2', { delay: 100 })
      await page.click('button')
      
      await page.goto('http://localhost:3000')
      
      await page.waitForSelector('.tasks')
      await page.screenshot({ path: './tasks.png' })

      const tasks = await page.$$('.task')

      expect(tasks).toHaveLength(2)
    }
  )
})
