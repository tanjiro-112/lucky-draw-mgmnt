# Lucky Draw Management Admin - Blueprint

## 1. Overview

This document provides a comprehensive overview of the Lucky Draw Management Admin dashboard. The application is a production-grade, feature-complete Admin Dashboard for managing lucky draw events, prizes, participants, and the execution of draws. It is built with a premium SaaS look and feel, focusing on a clean user interface and a robust, scalable architecture.

## 2. Core Principles & Tech Stack

*   **Frontend Framework:** React (latest version, utilizing functional components and hooks).
*   **Styling:** Tailwind CSS with the `daisyUI` plugin for a beautiful, customizable component library and easy theme switching.
*   **State Management:** Redux Toolkit for centralized and predictable state management across the application.
*   **Routing:** `react-router-dom` for client-side navigation.
*   **Animations:** `framer-motion` for subtle, elegant page transitions and component animations.
*   **Design Philosophy:** A premium SaaS visual language with a focus on clean layouts, intuitive user experience, and full responsiveness for desktop and tablet devices.
*   **Architecture:** A clean separation of concerns, with UI components, Redux state slices, and a mock API layer all clearly delineated.

## 3. Key Features Implemented

*   **Dashboard:** A central hub providing at-a-glance statistics for total events, prizes, and participants.
*   **Event Management:** Full CRUD (Create, Read, Update, Delete) functionality for managing events.
*   **Prize Management:** Full CRUD functionality for managing prizes, including prize names and quantities.
*   **Participant Management:** Functionality to view and add participants to the system.
*   **Draw Execution:** A dedicated page to perform lucky draws. Users can select an event and a prize, and the system will randomly select and display the winners.
*   **Theme Customization:** A "Settings" page that allows users to choose from a wide variety of `daisyUI` themes, with the selected theme persisting across sessions via `localStorage`.

## 4. Architecture & State Management

### Mock API Layer

The application operates on a mock API that simulates a real backend. This API maintains an in-memory database for session-persistent data, allowing for realistic interaction without a live server. It includes simulated latency and the potential for errors to ensure the UI is resilient and provides appropriate user feedback.

### Redux Toolkit

State management is handled by Redux Toolkit, which simplifies store setup and reducer logic. The store is organized into slices, each responsible for a specific domain of the application's data:

*   `eventsSlice.js`: Manages the state for events, including fetching, adding, updating, and deleting.
*   `prizesSlice.js`: Manages the state for prizes.
*   `participantsSlice.js`: Manages the state for participants.
*   `drawsSlice.js`: Manages the state for the draw process, including selecting winners and storing the results.

Asynchronous operations, such as fetching data from the mock API, are handled using `createAsyncThunk`.

## 5. Development Journey

1.  **Foundation & Setup:** The project was initialized with a standard React setup. Core dependencies like `react-router-dom`, `framer-motion`, `redux`, and `tailwindcss` were installed. A clean folder structure was established, separating pages, components, Redux logic, and API mocks.

2.  **Core Layout & Navigation:** A responsive layout was created using `Sidebar`, `Header`, and `PageWrapper` components. Client-side routing was implemented to connect the sidebar navigation to the various pages of the application.

3.  **API & State Layer:** A mock API was built to simulate backend interactions. The Redux Toolkit store and individual slices for each data domain were configured to manage the application's state.

4.  **Feature Implementation (Vertical Slices):** Each major feature (Events, Prizes, Participants, Draws) was implemented as a vertical slice, including:
    *   UI components for display and interaction (forms, modals, tables).
    *   Redux thunks for interacting with the mock API.
    *   Reducer logic for updating the state based on API responses.
    *   UI feedback for loading, success, and error states.

5.  **Dashboard & Visualization:** A dashboard was created to provide a high-level overview of the application's data, showcasing key metrics in an easy-to-digest format.

6.  **Polish & Refinement:** The application was polished with animations using `framer-motion` for page transitions. A theme-switching feature was added in the "Settings" page to enhance user customization. The entire application was tested for responsiveness to ensure a great experience on various screen sizes.
