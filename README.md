# AIBackgrounds


## Background
In this work we seek to support small business owners and independent sellers who do not have the resources to aesthetically market their products. We lessen this barrier for our target users by training the Stable Diffusion [1] image generation model on just a few images of a product provided by the user; once the model is trained on the images, the user can input text to refer to a trained image and specify a new environment for the item in the trained pictures such that a new picture is rendered by the model. Our method is unique in that it focuses on preserving the nature of the item before textual input from the user by first training the model on multiple images of the same object.	

## Implementation
The implementation is broken into two main parts: front-end and back-end. The front end is implemented
in Angular, a TypeScript framework for building web-apps. 

### Angular 
The code for the Angular components can be
found in `src/app/...`. The important files there are `gen-background.component.ts` /
`.html` and `home.component.ts` / `.html`. The home component is the first page shown to users when
they open the page. It loads the trained models from the database (located on the server) and allows 
users to select a model. On selecting a model, users are taken to the gen-background page that has two tabs.
The generate tab contains the logic for generating, rating, and saving images, and the history tab allows for 
viewing past images (loaded from database). The API that connects front-end to back-end is found in
`src/app/request-send.service.ts`. 

### Flask
The back-end is a Flask server, written in Python, that serves the web-app and
 handles AI functionality. See `server.py` for the server code. The server connects with a MongoDB
database to store models and images. Because of networking infrastructure limitations,
the server with the GPU, which is required for training and inference, is a separate machine from 
the one that serves the web-app. This GPU machine also runs a Flask server which is connected using 
`ngrok` to the machine that serves the web-app. See `AI.py` for the code that runs the ML libraries.

We restrict the number of requests we handle simultaneously because each model requires multiple
gigabytes of memory, and we only have enough on our server for two models to coexist.


[1]  R. Corvi, D. Cozzolino, G. Zingarini, G. Poggi, K. Nagano, and L. Ver- doliva, “On the detection of synthetic images generated by diffusion models,” arXiv preprint arXiv:2211.00680, 2022


