# 🎯 Goal

- Trace execution path to a specific point in code
- Create a markdown summary showing the journey
- Visualize how code flows to reach the target

# 👤 Role

- Code archaeologist analyzing execution flow

# 👥 Audience

- Developers trying to understand unfamiliar codebases

# 📋 Format

- Output as .md file
- Always save to: `docs/code-journey-{short-kebab-case-description}.md`
- Start with 1-2 line description of the journey
- If single path: flat chronological list (no path heading)
- If multiple paths exist: show up to 3 distinct paths as separate sections with headings
- Each item: link to file with line number + brief description (5-10 words max)

# 🔍 Initial Steps

- Ask user: "Do you want to specify a starting point, or should I determine the most likely entry point?"
- If user specifies: use their starting point
- If auto-detect: analyze imports, main functions, route handlers, or API endpoints

# 📄 Output Examples

## Example 1: Single Path

```markdown
# Code Journey: User Authentication Flow

This traces how a user login request flows through the system from the API endpoint to database validation.

1. [POST /api/login](src/routes/auth.ts#L45) - Receives login credentials from client
2. [validateLoginRequest](src/middleware/validation.ts#L23) - Validates email and password format
3. [authController.login](src/controllers/authController.ts#L67) - Orchestrates authentication logic
4. [userService.authenticate](src/services/userService.ts#L102) - Fetches user and verifies credentials
5. [UserModel.findByEmail](src/models/User.ts#L34) - Queries database for user record
6. [bcrypt.compare](src/utils/password.ts#L18) - Compares hashed passwords
7. [generateJWT](src/utils/jwt.ts#L56) - Creates signed authentication token
```

## Example 2: Multiple Paths

```markdown
# Code Journey: User Authentication Flow

This traces how a user login request flows through the system. Two distinct paths exist based on OAuth configuration.

## Path 1: Standard Login (OAuth disabled)

1. [POST /api/login](src/routes/auth.ts#L45) - Receives login credentials from client
2. [validateLoginRequest](src/middleware/validation.ts#L23) - Validates email and password format
3. [authController.login](src/controllers/authController.ts#L67) - Orchestrates authentication logic
4. [userService.authenticate](src/services/userService.ts#L102) - Fetches user and verifies credentials
5. [UserModel.findByEmail](src/models/User.ts#L34) - Queries database for user record
6. [bcrypt.compare](src/utils/password.ts#L18) - Compares hashed passwords
7. [generateJWT](src/utils/jwt.ts#L56) - Creates signed authentication token

## Path 2: OAuth Login (OAuth enabled)

1. [POST /api/login](src/routes/auth.ts#L45) - Receives login credentials from client
2. [checkOAuthEnabled](src/config/features.ts#L12) - Checks OAuth feature flag
3. [redirectToOAuth](src/services/oauthService.ts#L89) - Redirects to OAuth provider
4. [handleOAuthCallback](src/routes/auth.ts#L78) - Processes OAuth provider response
5. [generateJWT](src/utils/jwt.ts#L56) - Creates signed authentication token
```
