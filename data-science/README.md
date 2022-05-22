# Phase 2 Data Science Section

Welcome to the data science section.

## Setting Up
Install the libraries listed in the `requirements.txt` via the command:
```bash
pip3 install -r requirements.txt
```

## Exposing the AI as an API:

To allow other applications to use the model as an API one must run the following command in your machine:
```bash
uvicorn api:root
```

Or in development mode:
```bash
uvicorn api:root --reload
```

And then go to the site `http://localhost:8000/docs` to see the Swagger UI.
