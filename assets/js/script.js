/* 
Descrizione:
Iniziamo a lavorare alla nostra replica della nota app di messaggistica. L'esercitazione sará divisa in piú giornate, oggi iniziamo a lavorare alla prima milestone che vi
riporto di seguito:
Milestone 1 ✅
- Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


Milestone 2 ✅
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3 ✅
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà

Milestone 4 ✅
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato

● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

*/

const { createApp } = Vue

  createApp({
    data() {
      return {

        newSearch: '',

        newMessage: '',

        activeContact: 4,

        meContact: [
            {
                name: 'Matteo',
                avatar: './assets/img/avatar_1.jpg'
            }
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visib: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visib: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/img/avatar_4.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/img/avatar_5.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/img/avatar_5.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './assets/img/avatar_7.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './assets/img/avatar_8.jpg',
                visib: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
            
        ]
      }
    },
    methods: {
        selected(contact, i) {
            console.log(`hai cliccato l'utente ${contact}`);
            this.activeContact = i;
        },
        addMessage() {
             
            // imposto orario messaggio
            let DateTime = luxon.DateTime;
            const now = DateTime.now().toFormat('HH:mm');
            //console.log(now);

            //console.log(this);
            console.log(this.newMessage);
            if (this.newMessage != '') {
                let newObject = {
                    message: this.newMessage,
                    status: 'sent',
                    date: now
                };
                this.contacts[this.activeContact].messages.push(newObject);

                this.newMessage = '';
            }            
        },
        autoMessages() {

            // imposto orario messaggio più i 2 sec di ritardo
            let DateTime = luxon.DateTime;
            const nowPlusTwo = DateTime.now().plus({second: 2}).toFormat('HH:mm');

            this.backMessage = setTimeout(() => {
                const autoObject = {
                    message: 'ok, grazie',
                    status: 'received',
                    date: nowPlusTwo
                };
                this.contacts[this.activeContact].messages.push(autoObject);
            }, 2000);

        },
        searchName() {  
            
            this.contacts.forEach(contact => {

                const lowerSearch = this.newSearch.toLowerCase();
                const lowerName = contact.name.toLowerCase();
                
                console.log(lowerName);

                //console.log(lowerSearch);
                
                //console.log(contact.visib);

                if (lowerName.includes(lowerSearch)) {
                    
                    contact.visib = true;
                    
                    console.log(contact.visib);
                } else {

                    contact.visib = false;

                    console.log(contact.visib);
                }
                

                


            });
           

        },
        lastMessage() {
            
        }                
    }
  }).mount('#app')



