const statut = {
    allMessages: []
};

Vue.component('user1', {
    data() {
        return {
            nom: "Caroline",
            msg: '',
            data: statut
        };
    },
    template: `
        <div>
            <div class="chat-header">
                <img src="assets/images/image1.jpeg">
                <span> {{ nom }} </span>
            </div>
            <div style="min-height: 500px;">
                <div v-for="(message, index) in data.allMessages" :key="index" :class="message.sender === nom ? 'outcoming' : 'incoming'">
                    <img v-if="message.sender !== nom" src="assets/images/image1.jpeg">
                    <span>{{ message.text }}</span>
                </div>
            </div>
            <form class="input-container" @submit.prevent="envoyerMessage">
                <input type="text" placeholder="Écrivez un message..." v-model="msg">
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `,
    methods: {
        envoyerMessage() {
            if (this.msg !== '') {
                this.data.allMessages.push({
                    sender: this.nom,
                    text: this.msg
                });
                this.msg = ''
            }
        }
    }
});

Vue.component('user2', {
    data() {
        return {
            nom: "Max",
            img: "assets/images/image2.jpeg",
            msg: '',
            data: statut
        };
    },
    template: `
        <div>
            <div class="chat-header">
                <img :src="img">
                <span> {{ nom }} </span>
            </div>
            <div style="min-height: 500px;">
                <div v-for="(message, index) in data.allMessages" :key="index" :class="message.sender === nom ? 'outcoming' : 'incoming'">
                    <img v-if="message.sender !== nom" src="assets/images/image2.jpeg">
                    <span>{{ message.text }}</span>
                </div>
            </div>
            <form class="input-container" @submit.prevent="envoyerMessage">
                <input type="text" placeholder="Écrivez un message..." v-model="msg">
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `,
    methods: {
        envoyerMessage() {
            if (this.msg !== '') {
                this.data.allMessages.push({
                    sender: this.nom,
                    text: this.msg
                });
                this.msg = '';
            }
        }
    }
});

new Vue({
    el: '#app',
});