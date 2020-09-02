const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://store.asus.com/us/item/201904AM190000004/zephyrus-ROG-Zephyrus-G-Ultra-Slim-Gaming-Laptop%2C-15.6%E2%80%9D-IPS-Type-FHD%2C-GeForce-GTX-1660-Ti%2C-AMD-Ryzen-7-3750H%2C-8GB-DDR4%2C-512GB-PCIe-NVMe-SSD%2C-Windows-10%2C-GA502DU-PB73');
  
  const [el]    =await page.$x('//*[@id="item_photo"]');
  const src     =await el.getProperty('src');
  const imgUrl  =await src.jsonValue();

  const [el2]    =await page.$x('//*[@id="pro_title"]');
  const txt1     =await el2.getProperty('textContent');
  const title  =await txt1.jsonValue();

  const [el3]    =await page.$x('/html/body/div[1]/section/article/div[2]/div/figure/figcaption/div[2]/div[2]/span[2]');
  const txt2     =await el3.getProperty('textContent');
  const price  =await txt2.jsonValue();

  console.log({imgUrl,title,price});

  await browser.close();
})();