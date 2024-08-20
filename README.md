# Welcome to your GPT Engineer project

## Project info

**Project**: chatnest-social 

**URL**: https://run.gptengineer.app/projects/96714942-29c7-432f-a5d2-fd3fa7f8b440/improve

**Description**: follow the outline and stick to the UI/layout/ design shown in the images as much as possible

### 1. Home/Feed
   - Main Feed
     - Buttons:
       - Like: Taps on this will like a post.
       - Comment: Opens the comments section of a post.
       - Share: Opens sharing options (direct share, share to external apps).
       - Save: Saves the post to the user’s saved items.
       - Stories: Opens a full-screen view of Stories at the top of the feed.
       - Profile Picture (of other users): Navigates to the user’s profile page.
       - Three-dot menu (on each post): Opens options to report, mute, or hide the post.
       - Create Post: Opens the post creation page.
     - Navigates to:
       - Chat Settings: Accessible via an icon (e.g., settings gear or three-dot menu) on the top right of the feed.

### 2. Chat Settings (Accessible from Home/Feed)
   - Buttons:
       - Block: Opens a confirmation dialog to block a user.
       - Mute: Toggles mute status for specific chats.
       - Do Not Disturb: Allows selection of a time frame to silence notifications.
   - Navigates to:
       - Returns to Home/Feed after performing any action.

### 3. Profile (Accessible from Home/Feed)
   - Buttons:
       - Edit Profile: Opens the Edit Profile page.
       - Clickable Profile: Opens a preview of the profile as others see it.
   - Navigates to:
       - Edit Profile: Clicking this takes the user to the Edit Profile page.
       - Clickable Profile: Clicking this takes the user to a view-only version of their profile.

### 4. Edit Profile (Accessible from Profile)
   - Buttons:
       - Change Photo: Opens a photo selector or camera to update the profile picture.
       - Change Misc/Data: Opens fields to update bio, location, website, etc.
       - Profile Privacy: Toggle switch between public and private profiles.
       - Linked Accounts: Opens options to link or unlink other social media accounts.
   - Navigates to:
       - Change Photo: Clicking this opens a file picker for the user to upload a new profile picture.
       - Change Misc/Data: Opens editable fields to change various profile information.
       - Profile Privacy: Clicking toggles between public and private settings.
       - Linked Accounts: Opens a page with options to connect or disconnect accounts.
       - Returns to Profile after changes are saved.

### 5. Clickable Profile (Accessible from Profile)
   - Buttons:
       - Pinned Post/Story: Clicking allows unpinning or changing the pinned item.
       - Activity Log: Opens a detailed log of recent profile activities.
   - Navigates to:
       - Pinned Post/Story: Allows unpinning or selecting a new item to pin.
       - Activity Log: Opens a page showing a history of recent actions on the account.

### 6. Create Post (Accessible from Home/Feed)
   - Buttons:
       - Text Field: Input for the post's text.
       - Add Image/Video: Opens file picker to add media.
       - Post: Publishes the post immediately.
       - Save Draft: Saves the post in drafts for future publishing.
       - Schedule Post: Opens a date and time picker to schedule the post.
   - Navigates to:
       - Post: Publishes the content and returns to Main Feed.
       - Save Draft: Saves the draft and returns to the Main Feed.
       - Schedule Post: Saves the post for automatic publishing at a scheduled time.

### 7. Notification (Accessible from Home/Feed)
   - Buttons:
       - Search: Opens a search bar to find users.
       - Search Results: Clicking on any search result navigates to the selected user’s profile.
   - Navigates to:
       - Search: Takes the user to a search results page where they can select users.
       - User Profiles: Clicking on a result opens that user’s profile.

### 8. All Chats List (Accessible from Home/Feed)
   - Buttons:
       - User Profile (within a chat): Opens the profile of the user you are chatting with.
       - New Chat: Opens a page to start a new conversation with a user.
   - Navigates to:
       - User Profile: Clicking opens the profile of the selected user.
- New Chat: Takes the user to a page to select contacts for a new chat.

### 9. User Profile (Accessible from All Chats List)
   - Buttons:
       - Follow: Follows or unfollows the user.
       - Block: Blocks the user and prevents them from contacting you.
       - Message: Opens the chat with the user.
   - Navigates to:
       - Follow: Clicking follows/unfollows the user and refreshes the profile page.
       - Block: Blocks the user and returns to All Chats List.
       - Message: Takes the user back to the chat with the selected user.

### 10. App Settings (Accessible from All Chats List)
   - Buttons:
       - Notification Settings: Opens options to customize push and in-app notifications.
       - Privacy Settings: Opens a page to manage who can see your content, who can contact you, etc.
       - Account Info: Opens options to update email, password, or linked accounts.
       - Help & Support: Opens a help center or chat with support.
       - Log Out: Logs out the user from the app.
   - Navigates to:
       - Notification Settings: Clicking opens the settings page for customizing notifications.
       - Privacy Settings: Opens a page for adjusting privacy controls.
       - Account Info: Opens a page for updating personal information.
       - Help & Support: Opens the help center.
       - Log Out: Logs out the user and returns to the login screen. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/96714942-29c7-432f-a5d2-fd3fa7f8b440/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/96714942-29c7-432f-a5d2-fd3fa7f8b440/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/chatnest-social.git
cd chatnest-social
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/96714942-29c7-432f-a5d2-fd3fa7f8b440/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)