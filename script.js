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
                
                   
                        const germany = () => {
                            var emails = ['@gmail.com', '@hotmail.com', '@yahoo.com', '@live.com', '@msn.com', 
                            '@outlook.com', "@ymail.com", "@icloud.com" , "@web.de", "@gmx.de", "@outlook.de", 
                            "@yahoo.de", "@live.de", "@hotmail.de", "@gmx.net", "@msn.de" ,"@googlemail.com"];
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
                            '@me.com', "@fastmail.com"];
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
                            '@outlook.com',"@ymail.com", "@googlemail.com",'@me.com', "@fastmail.com", 
                            "@protonmail.com", "@icloud.com", "@skynet.com", "@comcast.net", "@skybet.com"];
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
