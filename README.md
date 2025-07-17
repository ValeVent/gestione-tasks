# Progetto Gestione Tasks

Questo progetto è un'applicazione web sviluppata in Angular per la gestione delle attività (tasks). Permette agli utenti di visualizzare un elenco di tasks, aggiungerne di nuovi, visualizzare i dettagli di un task specifico ed eliminarlo.


## Descrizione Approfondita del Progetto

L'applicazione "Gestione Tasks" è una Single Page Application (SPA) che offre una soluzione semplice per organizzare le proprie attività. I tasks sono caratterizzati da un titolo, una descrizione e un livello di urgenza (basso, medio, alto). Il progetto utilizza il routing di Angular per navigare tra diverse viste: una lista principale dei tasks, un form per aggiungerne di nuovi, e una pagina di dettaglio per ogni task. I dati iniziali dei tasks vengono caricati da un file JSON e sono gestiti tramite un servizio Angular, garantendo una separazione chiara delle responsabilità.


## Tecnologie Utilizzate

- **Angular**: Framework per la costruzione dell'applicazione web.

- **TypeScript**: Linguaggio di programmazione per lo sviluppo dell'applicazione.

- **HTML**: Struttura dei componenti e dei template.

- **SCSS (Sass)**: Per lo styling dei componenti, con classi che indicano i livelli di urgenza.

- **Angular Router**: Per la navigazione tra le diverse pagine/viste dell'applicazione.

- **Angular Forms (Template-driven forms)**: Per la gestione dei form di input e la validazione.

- **JSON**: Utilizzato per fornire un set iniziale di dati per i tasks.

- **Bootstrap 5**: Framework CSS utilizzato per il layout e lo stile di base (es. btn, form-control, list-group, classi di utilità per il layout).


## Funzionalità Principali

- **Visualizzazione Lista Tasks**: Mostra tutti i tasks con la loro descrizione e il livello di urgenza, evidenziato da un colore specifico (verde per basso, arancione per medio, rosso per alto).

- **Aggiunta Nuovo Task**: Un form dedicato per inserire nuovi tasks, con campi per titolo, descrizione e selezione dell'urgenza. Include validazione client-side per i campi obbligatori.

- **Dettaglio Task**: Cliccando su un task nella lista, si accede a una pagina dedicata che mostra tutti i dettagli di quel task.

- **Eliminazione Task**: Possibilità di rimuovere un task dalla lista.

- **Routing**: Navigazione fluida tra la homepage (lista tasks), la pagina di aggiunta e le pagine di dettaglio.

- **Gestione Dati con Servizio**: I dati dei tasks sono gestiti centralmente da un servizio Angular, che carica i dati iniziali da un file JSON e fornisce metodi per aggiungere, eliminare e recuperare tasks.

- **Pagina 404**: Una pagina dedicata per gestire percorsi URL non trovati.


## Come Avviare il Progetto

Segui questi passaggi per configurare ed eseguire il progetto localmente:

### Prerequisiti

- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli


### Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/progetto-gestione-tasks.git

Assicurati di sostituire 'progetto-gestione-tasks.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd progetto-gestione-tasks

3. Installa le dipendenze del progetto:

npm install


### Avvio dell'Applicazione

1. Avvia il server di sviluppo Angular:

ng serve

2. Apri il tuo browser web e naviga su http://localhost:4200/. L'applicazione si ricaricherà automaticamente ad ogni modifica dei file sorgente.

## Stato del Progetto

Questo progetto è un'applicazione Angular completa e funzionale che dimostra l'uso di componenti, servizi, routing e gestione dei form, fornendo una solida base per applicazioni più complesse. I dati sono gestiti in memoria e non persistono al ricaricamento della pagina.


## Contatti

- **GitHub**: https://github.com/ValeVent

- **LinkedIn**: https://www.linkedin.com/in/valentina-venturo

- **Sito Web**: http://www.valentinaventuro.it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.


