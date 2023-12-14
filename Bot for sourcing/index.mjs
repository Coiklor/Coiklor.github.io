import puppeteer from "puppeteer";

let url = "https://outlook.live.com/mail/0/"


let tab2 = "#innerRibbonContainer > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > span > button.splitPrimaryButton.root-191 > span" 
let tab3 = "#docking_InitVisiblePart_0 > div > div.vBoqL.iLc1q.cc0pa.cF0pa.tblbU.zHv4R.dP5Z2 > div.aFWR_ > div > span > button.ms-Button.root-430"
/* let result = `zapato@gmail.com<br>azul28@gmail.com` */ 
let emails = "#REK000000 > span > span > span" 
let linkedIn = "#Pivot2529-Tab4 > span > span > span"
/* let validated = startsWith("#ImmersiveProfileOverlayWrapper > div > div > div:nth-child(2) > div > div.customScrollBar")
 */


async function openPage(){
    const browser= await puppeteer.launch({headless: false,
    defaultViewport: null,
    headless: false,
    ignoreDefaultArgs: ['--enable-automation'],
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    userDataDir: "C:/Users/Scout 155/AppData/Local/Google/Chrome/User Data/Default",
    timeout: 0,})
    const page= await browser.newPage()
    await page.setBypassCSP(true); // Añade esta línea aquí
    let err = "Request timed out"
    try{
        page.setDefaultTimeout(0)
        await page.goto(url, {waitUntil: 'load', timeout: 0})
        console.log('here23')
    }catch(error){
        if(error.message === err){
           await page.reload()
        }
    }  
    let first1 = page.waitForSelector(tab2, {visible: true})

    async function second(){

         console.log('close')      
       
    }


    async function first(){
        try {
            await first1
            console.log('hola')
            await Promise.all([
                page.click(tab2),
                page.waitForNavigation({waitUntil: 'load'}),
            ]);
            await page.setBypassCSP(true)
            await page.waitForNavigation();
            await second();  
        } catch (error) {
            console.error('Error en la función first:', error);
        }
    }
    
    await first();
    await browser.close()
}

openPage()


/* await page.type('div[role="textbox"]', result) */

        /*let see1 = await page.waitForSelector(emails, {visible: true})

        async function see(){
            for(i = 0; i < emails.length; i+= 2 ){
                let totalMails =  "REK" + ("00000" + i).slice(-5);
                console.log(totalMails)
               /*  await Promise.all([
                    page.click(totalMails[i])

                ]) 
            }
        }*/

        //see(see1)

        /*         let result2 = `<span class="X3BTy p2EkI">${result}</span>`
 */
         /* //selection
         
         await puppeteer.Locator.race([
             page.locator('::-p-aria(Para[role=//"textbox//"])'),
             page.locator('div.T6Va1'),
             page.locator('::-p-xpath(//*[@id=//"docking_InitVisiblePart_0//"]/div/div[3]/div[1]/div/div[3]/div/div/div[1])'),
             page.locator(':scope >>> div.T6Va1')
         ])
             .setTimeout(timeout)
             .click({
                 offset: {
                     x: 139,
                     y: 17.5,
                 },
             });
         await navigator.clipboard.writeText(result);
         await page.keyboard.down('Control');
         await page.keyboard.press('v');
         await page.keyboard.up('Control');
         */

         //ERRORES

         /*  let retries = 5;
        while(retries > 0){
        try{
            console.log('here')
            await page.type('input[placeholder="Agregar un asunto"]', 'zancudo25')
            break; // Si la operación fue exitosa, sal del bucle
        }catch(error){
            console.log(error.message); // Imprime el mensaje de error
            await page.reload()
            retries--; // Disminuye el contador de intentos
        }
    }  */