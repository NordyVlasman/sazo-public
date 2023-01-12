# Sazo Application
These are the frontend applications for Sazo `Samen Zorg`

## What's inside?
This repository contains the following packages/applications

### Apps and Packages
- `apps/app`: a NextJS App for the **users** of Sazo
- `apps/organization`: a NextJS App for the **organizations** to register
- `packages/types`: Shared types used by **organization** and **app**
- `packages/ui`: Basic tailwindcss elements that can be used by both frontend applications
- `packages/*-config`: Development configurations

## How to set up?
It's really easy to get things started.

```shell
$ git clone https://github.com/NordyVlasman/sazo.git && cd sazo
$ pnpm install
$ pnpm run dev
```

That wil be all. Go to:
- [http://localhost:3000](http://localhost:3000) for the user environment
- [http://localhost:3001](http://localhost:3001) for the organization environment

**Good luck!**