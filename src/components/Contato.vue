<template>
    <div class="contato" :style="{ marginLeft: isSidebarOpen ? '250px' : '0' }">
        <h1 class="main-title">Entre em Contato</h1>
        <h2>Redes sociais</h2>
        <div class="rede-social-links">
            <a href="https://www.instagram.com/echevarria.picture/" class="instagram">
                <font-awesome-icon icon="fa-brands fa-instagram" size="3x" style="color: #000000;" />
            </a>
            <a href="https://www.facebook.com/katiany.echevarriapinto" class="facebook">
                <font-awesome-icon icon="fa-brands fa-facebook" size="3x" style="color: #000000;" />
            </a>
            <a href="https://www.linkedin.com/in/katiany-echevarria-0b5859230/" class="linkedin">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="3x" style="color: #000000;" />
            </a>
        </div>
        <h2>Mande um email</h2>
        <form action="" class="formFields" @submit.prevent="sendEmail">
            <div class="name-fields">
                <input type="text" v-model="firstName" placeholder="Nome completo"/>
            </div>
            <div class="field">
                <input type="text" v-model="subject" placeholder="Assunto da mensagem"/>
            </div>
            <div class="email-field field">
                <input type="email" v-model="email" placeholder="Seu email"/>
            </div>
            <div class="field">
                <textarea type="textarea"  v-model="message" placeholder="Mensagem"></textarea>
            </div>
            <div class="submitbutton field">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>
    
    
<script>

import {Email} from "@/assets/smtp/smtp.js";

export default {
    name: 'ContatoComponent',
    props: {
        isSidebarOpen: Boolean
    },
    data() {
    return {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    },
    methods: {
        sendEmail() {
            Email.send({
                SecureToken:"d30e1719-fa0a-4d1b-af91-bb8687b93b28",
                To:"katiani_ep@hotmail.com",
                From:this.email,
                Subject:this.subject,
                Body:this.message,
            }).then(message => alert(message));
    }

    }
}; 
</script>
      
<style scoped>
.contato {
    display: flex;
    justify-content: center;
    flex-direction: column; 
    padding: 2rem;
    color: black;
}
.formFields{
    width: 40%;
    margin: 0 auto;
}

.main-title {
    font-family: 'Roboto', sans-serif; 
    font-size: 2em; 
    color: #333; 
}

.field{
    margin: 10px 0;
}
input,textarea{
    height: 50px;
    width: 100%;
    margin: 20px;
    border: 3px solid #133;

}

textarea{
    height: 300px;
}

.submitbutton button{
    height: 50px;
    width: 200px;
    margin: 0 auto;
    text-align: center;
    font-weight: 300;
    border-radius: 30px;
    border: 3px solid #133;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rede-social-links{
}
.facebook,.linkedin,.instagram{
    margin-right: 10px;
}

  
</style>
      