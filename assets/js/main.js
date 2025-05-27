const statut = {
    Messages: []
};

Vue.component('user1', {
    data() {
        return {
            nom: "Caroline",
            msg: '',
            disc : 'en ligne',
            data: statut,
        };
    },
    template: `
        <div>
            <div class="header">
                <img src="assets/images/image1.jpeg">
                <span> {{ nom }} </span>
                <hr>
                   <p class="status">{{ disc }}<p>
            </div>
            <div style="min-height: 500px;">
                <div v-for="(message, index) in data.Messages" :key="index" :class="message.expediteur === nom ? 'sortant' : 'entrant'">
                    <img v-if="message.sender !== nom" src="assets/images/image1.jpeg">
                    <span>{{ message.text }}</span>
                </div>
            </div>
            <form class="input" @submit.prevent="envoyer">
                <textarea placeholder="Écrivez un message..." v-model="msg"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `,
    methods: {
        envoyer() {
            if (this.msg !== '') {
                this.data.Messages.push({
                    expediteur: this.nom,
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
            disc : 'en ligne',
            data: statut
        };
    },
    template: `
        <div>
            <div class="header">
                <img :src="img">
                <span> {{ nom }} </span>
                 <hr>
                   <p class="status">{{ disc }}<p>
            </div>
            <div style="min-height: 500px;">
                <div v-for="(message, index) in data.Messages" :key="index" :class="message.expediteur === nom ? 'sortant' : 'entrant'">
                    <img v-if="message.sender !== nom" src="assets/images/image2.jpeg">
                    <span>{{ message.text }}</span>
                </div>
            </div>
            <form class="input" @submit.prevent="envoyer">
                <textarea placeholder="Écrivez un message..." v-model="msg"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `,
    methods: {
        envoyer() {
            if (this.msg !== '') {
                this.data.Messages.push({
                    expediteur: this.nom,
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