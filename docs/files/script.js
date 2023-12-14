            /* For Name/Last Name */

            const $form = document.querySelector('#form')
            const $buttonResult = document.querySelector("#totheresult")   
            const textarea = document.getElementById("result")

                let handleSubmit = (event) => {
                event.preventDefault()
                const form = new FormData($form);
                let name1= (form.get("name"))
                let name2 = (form.get("lastname"))
                let names = (name1+name2)
               
                /* let countries = document.getElementsByClassName("item") */
                
                    
               let row = (names) =>{       
                        const australia = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", "@icloud.com" , "@outlook.au", '@mail.au', '@fastmail.com', "@aol.com",
                            "@yahoo.au", "@live.com.au", "@hotmail.au", "@gmx.net", "@msn.au" ,"@googlemail.com", "@mailbox.org"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const brazil = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", '@bol.com.br'
                            ,'@ig.com.br', '@terra.com.br', '@uol.com.br', '@outlook.com', "@ymail.com", "@icloud.com" , "@web.de", "@gmx.de", "@outlook.de", '@mail.de',
                            "@yahoo.br", "@live.br", "@hotmail.br", "@msn.br" ,"@googlemail.com", "@mailbox.org"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const mexico = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", '@live.com.mx' ];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }
                   
                        const germany = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@t-online.de",
                            '@outlook.com', "@ymail.com", "@icloud.com" , "@web.de", "@gmx.de", "@outlook.de", '@mail.de', "@freenet.de",
                            "@yahoo.de", "@live.de", "@hotmail.de", "@gmx.net", "@msn.de" ,"@googlemail.com", "@mailbox.org", "@aol.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }
                        
                        const greece = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", 
                             '@outlook.com', "@ymail.com", "@icloud.com" , "@web.gr", "@gmx.gr", "@outlook.gr", '@mail.gr',
                            "@yahoo.gr", "@live.gr", "@hotmail.gr", "@msn.gr" ,"@googlemail.com", "@mailbox.org"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }
                        
                        const sweden = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", 
                             '@outlook.com', "@ymail.com", "@icloud.com" , "@web.se", "@gmx.se", "@outlook.se", '@mail.se',
                            "@yahoo.se", "@live.se", "@hotmail.se", "@msn.se" ,"@googlemail.com", "@mailbox.org", '@mail.com' , '@me.com'];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const switzerland = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", "@gmx.net",
                            '@outlook.com', "@ymail.com", "@icloud.com" , "@web.ch", "@gmx.ch", "@outlook.ch", '@mail.ch', "@pm.me", "@hispeed.ch",
                            "@yahoo.ch", "@live.ch", "@hotmail.ch", "@msn.ch" ,"@googlemail.com", "@bluewin.ch", '@mail.com' , '@me.com'];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const deenmark = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', "@aol.com", 
                             '@outlook.com', "@ymail.com", "@icloud.com" , "@web.dk", "@gmx.dk", "@outlook.dk", '@mail.dk',
                            "@yahoo.dk", "@live.dk", "@hotmail.dk", "@msn.dk" ,"@googlemail.com", "@mailbox.org", '@mail.com' , '@me.com'];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const france = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", "@orange.fr", "@free.fr", "@icloud.com", '@hotmail.fr', 
                            '@yahoo.fr', '@live.fr', '@msn.fr','@outlook.fr', "@googlemail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const ireland = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", '@eircom.net', "@icloud.com", '@hotmail.ie', 
                            '@yahoo.ie', '@live.ie', '@msn.ie','@outlook.ie', "@googlemail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }
                        
                        const korea = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", '@naver.com',  "@honmail.net", "@nate.com", "@icloud.com", '@hotmail.kr', 
                            '@yahoo.kr', '@live.kr', '@msn.kr','@outlook.kr', "@googlemail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result
                        }

                        const bulgary = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", "@abv.bg", "@mail.bg", "@stoev.org", "@velichkov.net",
                            '@hotmail.bg', '@yahoo.bg', '@live.bg', '@msn.bg','@outlook.bg', "@@googlemail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n ${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        const czech = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", "@centrum.cz", "@seznam.cz", "@volny.cz", '@icloud.com', 
                            '@hotmail.cz', '@yahoo.cz', '@live.cz', '@msn.cz','@outlook.cz', "@googlemail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        const belgium = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com", '@telenet.be','@icloud.com', '@mail.be', "@gmx.com", 
                            '@hotmail.be', '@yahoo.be', '@live.be', '@msn.be','@outlook.be', "@googlemail.com",
                            '@me.com', "@fastmail.com", "@pandora.be"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        const romania = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com", '@hotmail.ro', '@yahoo.ro', '@live.ro', '@msn.ro','@outlook.ro', 
                            "@googlemail.com",'@me.com', "@fastmail.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }
                        
                        const poland = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com", "@wp.pl", "@toya.net.pl", "@poczta.onet.pl" ,'@hotmail.pl', 
                            '@yahoo.pl', '@live.pl','@msn.pl','@outlook.pl',"@googlemail.com",'@me.com', "@fastmail.com",
                            "@vp.pl"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        const canada = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com",'@hotmail.ca','@yahoo.ca', '@live.ca','@msn.ca','@outlook.ca',
                            "@googlemail.com",'@me.com', "@fastmail.com", "@protonmail.com", "@icloud.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        const uk = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com",'@hotmail.co.uk','@yahoo.co.uk', '@live.co.uk','@msn.co.uk',
                            '@outlook.co.uk', "@googlemail.com",'@me.com', "@fastmail.com", "@protonmail.com", "@icloud.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }
                        const usa = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com", "@googlemail.com",'@me.com', "@fastmail.com", '@aol.com', '@mail.com',
                            "@protonmail.com", "@icloud.com", "@bellsouth.net", "@comcast.net", "@optonline.net" , '@scbglobal.net'];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }
                        const netherlands = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com',"@ymail.com", "@googlemail.com",'@me.com', "@fastmail.com", 
                            "@protonmail.com", "@icloud.com", "@skynet.com", "@comcast.net", "@skybet.com",
                            '@hotmail.nl', '@yahoo.nl', '@live.nl', '@msn.nl', '@outlook.nl',"@chello.nl", 
                            "@home.nl", "@hetnet.nl","@ntlworld.nl", "@planet.nl","@zonnet.nl", "@googlemail.com",
                            '@me.nl', "@fastmail.com","@protonmail.com", "@icloud.com"];
                            var result = '';
                                for (var els = 0; els < emails.length; els++) {
                                result += `\n${names}` + emails[els] + ' ';
                            }
                            return textarea.innerHTML = result               
                        }

                        let countrieSelection = () => {
                            let countries = document.getElementById("countries")
                            let thisCountry = countries.value

                            console.log(thisCountry)

                            if(thisCountry == "Germany"){
                                germany()
                            }else if (thisCountry == "France"){
                                france()
                            }else if (thisCountry == "Bulgary"){
                                bulgary()
                            }else if(thisCountry == "Czech"){
                                czech()
                            }else if (thisCountry == "Belgium"){
                                belgium()
                            }else if (thisCountry == "Romania"){
                                romania()
                            }else if (thisCountry == "Poland"){
                                poland()
                            }else if (thisCountry == "Canada"){
                                canada()
                            }else if (thisCountry == "United Kingdom"){
                                uk()
                            }else if (thisCountry == "USA"){
                                usa()
                            }else if (thisCountry == "Netherlands"){
                                netherlands()
                            }else if (thisCountry == 'Australia'){
                                australia()
                            }else if (thisCountry == 'Brazil'){
                                brazil()
                            }else if (thisCountry == 'Deenmark'){
                                deenmark()
                            }else if (thisCountry == 'Greece'){
                                greece()
                            }else if(thisCountry == 'Ireland'){
                                ireland()
                            }else if(thisCountry == 'Korea'){
                                korea()
                            }else if(thisCountry == 'Mexico'){
                                mexico()
                            }else if(thisCountry == 'Sweden'){
                                sweden()
                            } else if(thisCountry == "Switzerland"){
                                switzerland()
                            }
                        }

                        countrieSelection()

                        
                }
                
                $buttonResult.setAttribute("href", '#result', row(names))
                $buttonResult.click()
                }
                 
                //for copy the text
                 $form.addEventListener("submit", handleSubmit) //not restart
                
                function read (){
                    let text = document.querySelector("#result").value

                    return text
                }

                async function copy(){
                    let txt = read()
                    await navigator.clipboard.writeText(txt)
                }

                let btn = document.querySelector("#copy")

                btn.addEventListener('click', copy) 

            /* For country selection */
          /*   let search = document.getElementById("search")
            let items = document.getElementsByClassName("item")
            
            for (let i = 0; i< items.length; i++){
                items[i].addEventListener("click", itemClick)
            }
    
            function itemClick(){
                search.value = event.target.innerText;
                for (let i = 0; i < items.length; i++){
                    items[i].style.display = "none"
                }
            }
    
            search.addEventListener("keyup", function(){
                for (let i = 0; i<items.length; i++ ){
                let name = items[i].innerText.toUpperCase();
               
                if(name.includes(search.value.toUpperCase()) && search.value != ""){
                    items[i].style.display = "block"
                } else{
                    items[i].style.display = "none"
                }
                
                }
            }) */
