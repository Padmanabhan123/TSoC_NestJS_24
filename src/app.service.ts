import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo REST API</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f0f0f0;
            font-family: Arial, sans-serif;
          }
          .message {
            text-align: center;
            font-size: 2rem;
            color: #fff;
            background: linear-gradient(90deg, #ff7e5f, #feb47b);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }
          .developer {
            font-size: 1rem;
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="message">
          Hello! from Todo rest API!
        </div>
        <div class="developer">
          Developed By: Vijayendher Gatla
        </div>
      </body>
      </html>
    `;
  }
}