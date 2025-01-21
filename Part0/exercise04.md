flowchart TD
    A[User creates a new note] -->|Submit form| B[POST /new_note]
    B --> C{Server Response}
    C -->|302 Redirect| D[GET /notes]
    D --> E[Server responds with HTML document]
    E --> F[GET main.css]
    F --> G[Server responds with CSS file]
    G --> H[GET main.js]
    H --> I[Server responds with JavaScript file]
    I --> J[GET data.json]
    J --> K[Server responds with updated notes JSON]
    K --> L[Browser updates UI with the new note]
