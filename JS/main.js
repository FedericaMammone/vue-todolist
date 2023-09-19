const { createApp } = Vue;

createApp({
    data() {
        return {
            error: false,
            newTask: '',
            text: '',
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: true
                },
                {
                    text: 'Dare da mangiare ai gatti',
                    done: false
                }

            ]
        }
    },
    methods: {
        aggiungiTask() {
            console.log(this.newTask);

            if (this.newTask !== '' && this.newTask.length >= 5) {
                const oggettoTask =
                {
                    text: this.newTask,
                    done: false
                }
                this.tasks.unshift(oggettoTask);
                this.error = false;
            } else {
                this.error = true;
            }

            this.newTask = '';
        },
        rimuoviTask(indice) {
            this.tasks.splice(indice, 1);
        },
        invertDone(index) {
            console.log(index);

            if (index.done === true) {
                index.done = false;
            } else {
                index.done = true;

            }
        }
    }

}).mount('#app')




