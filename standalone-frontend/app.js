class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "shivila", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "shivila")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();



var industry =document.getElementById("ind")
industry.onclick=function(){
    localStorage.setItem("button","industry");
}


var supportForm = document.getElementById('supportForm');
supportForm.addEventListener('submit', myForm);

function myForm(){
    let title = document.getElementById('title')
    let email = documet.getElementById('email')
    let ticket_prior = document.getElementById('ticket-prior')
    let image_input = document.getElementById('image-input')

    const myFormData = {
        Title : title.value,
        Email : email.value,
        Ticket_prior : ticket_prior.value,
        Image_input : image_input.value
    }

    let myFormDetails = JSON.stringify(myFormData);

    localStorage.setItem("title", myFormData.Title)
    localStorage.setItem("email", myFormData.Email)
    localStorage.setItem("ticket_prior", myFormData.Ticket_prior)
    localStorage.setItem("image_input", myFormData.Image_input)
}

// industry.onclick=function(){
//     localStorage.getItem("button");
// }

// function func(){
    
//     var name= document.getElementById("title").value;
//     var phone= document.getElementById("phone").value;
//     var email= document.getElementById("email").value;

//     localStorage.setItem('name',name);
//     localStorage.setItem('phone',phone);
//     localStorage.setItem('email',email);
// }

//First section for user to select a button
function industry_btn(){
    // var btn = document.getElementById("ind").value;
    localStorage.setItem('user clicked',"industrial sector")
}
function products_btn(){
    localStorage.setItem('user clicked'," Products")
}
function services_btn(){
    localStorage.setItem('user clicked',"Services")
}
function games_btn(){
    localStorage.setItem('user clicked',"Games")
}
function support_btn(){
    localStorage.setItem('user clicked',"Support")
}
// After clicking 'industrial sector' button, user comes to this section of buttons

function banking_btn(){
    localStorage.setItem('Industrial Sector>>',"Banking")
}
function travel_btn(){
    localStorage.setItem('Industrial Sector>>',"Travel")
}
function capital_markets_btn(){
    localStorage.setItem('Industrial Sector>>',"Capital Markets")
}
function education_btn(){
    localStorage.setItem('Industrial Sector>>',"Education")
}
function retail_btn(){
    localStorage.setItem('Industrial Sector>>',"Retail")
}
function insurance_btn(){
    localStorage.setItem('Industrial Sector>>',"Insurance")
}
function health_btn(){
    localStorage.setItem('Industrial Sector>>',"Health")
}

// After clicking 'Products' button, user comes to this section of buttons
function gather_app(){
    localStorage.setItem('Products>>',"Gather App")
}
function MAttendance_app(){
    localStorage.setItem('Products>>',"MAttendance App")
}
function payroll_app(){
    localStorage.setItem('Products>>',"MPayroll App")
}
function vWorkin_app(){
    localStorage.setItem('Products>>',"VWorkin App")
}
function intervc_app(){
    localStorage.setItem('Products>>',"InterVC App")
}
function jobNearby_app(){
    localStorage.setItem('Products>>',"JobNearby App")
}
function cSkill_app(){
    localStorage.setItem('Products>>',"CSkill App")
}
function AIsyst_app(){
    localStorage.setItem('Products>>',"AISyst. App")
}
function checkcall_app(){
    localStorage.setItem('Products>>',"CheckCall App")
}
function DigitMarket_app(){
    localStorage.setItem('Products>>',"DigitMark App")
}
function dew_browser(){
    localStorage.setItem('Products>>',"Dew Web Browser")
}

// After clicking 'Services'button, user comes to this section of buttons
function eng(){
    localStorage.setItem('Services>>',"Engineering")
}
function cloud_comp(){
    localStorage.setItem('Services>>',"Cloud Computing")
}
function blockchain(){
    localStorage.setItem('Services>>',"Blockchain")
}
function automation(){
    localStorage.setItem('Services>>',"Automation & Manual QA Service")
}
function security_test(){
    localStorage.setItem('Services>>',"Security Testing")
}
function tech_innov(){
    localStorage.setItem('Services>>',"Technology Innovation")
}
function tech_consult(){
    localStorage.setItem('Services>>',"Technology Consulting")
}

// After clicking 'support'button, user comes to this section of buttons

function generate_your_ticket(){
    localStorage.setItem('Support>',"Generate your ticket")
}

function customer_agent(){
    localStorage.setItem('Support>',"Do you want to talk our customer agent")
}

// After clicking 'Engineering'button from 'Services', user comes to this section of buttons
function website_dev(){
    localStorage.setItem('Engineering>>',"Website Development")
}
function webapp_dev(){
    localStorage.setItem('Engineering>>',"Web App Development")
}
function mobapp_dev(){
    localStorage.setItem('Engineering>>',"Mobile App Development")
}
function deskapp_dev(){
    localStorage.setItem('Engineering>>',"Desktop App Development")
}
function plugin_dev(){
    localStorage.setItem('Engineering>>',"Plugin Development")
}

// After clicking 'Website Development'button from 'Engineering', user comes to this section of buttons
function static(){
    localStorage.setItem('Website Development>>',"Static")
}
function dynamic(){
    localStorage.setItem('Website Development>>',"Dynamic")
}
function content_mang(){
    localStorage.setItem('Website Development>>',"Content Management System Based")
}

// After clicking 'Web App Development'button from 'Engineering', user comes to this section of buttons
function eCom(){
    localStorage.setItem('Web App Development>>',"eCommerce")
}
function enterp(){
    localStorage.setItem('Web App Development>>',"Enterprise Resource Planning")
}

// After clicking 'Mobile App Development'button from 'Engineering', user comes to this section of buttons
function android(){
    localStorage.setItem('Mobile App Development>>',"Android")
}
function ios(){
    localStorage.setItem('Mobile App Development>>',"IOS")
}
function cross_plat(){
    localStorage.setItem('Mobile Development>>',"Cross-Platform")
}


// After clicking 'Desktop App Development'button from 'Engineering', user comes to this section of buttons
function windows(){
    localStorage.setItem('Desktop Development>>',"Windows")
}
function mac(){
    localStorage.setItem('Desktop Development>>',"Mac OS")
}
function linux(){
    localStorage.setItem('Desktop Development>>',"Linux")
}
function cross_platf(){
    localStorage.setItem('Desktop Development>>',"Cross-Platform")
}

// After clicking 'Plugin App Development'button from 'Engineering', user comes to this section of buttons
function chrome(){
    localStorage.setItem('Plugin Development>>',"Chrome")
}
function edge(){
    localStorage.setItem('Plugin Development>>',"MS Edge")
}
function firefox(){
    localStorage.setItem('Plugin Development>>',"Firefox")
}
function Opera(){
    localStorage.setItem('Plugin Development>>',"Opera")
}
function safari(){
    localStorage.setItem('Plugin Development>>',"Safari")
}
