## Overview

This project is a URL Shortener application that takes long URLs and generates shorter, more manageable links. The application is designed to be efficient, scalable, and easy to deploy.

## Features

- Generates shortened URLs using a **polynomial rolling hash function**.
- Ensures **idempotency** by returning the same shortened URL for the same input URL.
- Does not generate unique shortened URLs per user; the same URL will always return the same shortened version for all users.

## Tech Stack

- **Backend Framework**: Node.js
- **Database**: Neon DB (PostgreSQL Serverless)
- **Containerization**: Docker
- **Hosting Platform**: Render.com

## Hashing Methodology

The project employs a **polynomial rolling hash function** to convert long URLs into shorter, fixed-length strings. This method ensures deterministic hashing, meaning:

- Inputting the same URL will always produce the same hash value.
- The hash function is computationally efficient and suitable for handling a large number of URLs.

