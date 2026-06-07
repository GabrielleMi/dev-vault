# Intro
A playground for experimenting with new web features, emerging technologies, tooling, and architectural patterns.

I wish to learn, so I play in this repo.

# Workflow: Development and Publication
This project uses [pnpm](https://pnpm.io/), [changesets](https://github.com/changesets/changesets), and [GitHub Actions](https://docs.github.com/en/actions) to automate version management and package publication.

## 1. Development
When adding a feature or fixing a bug:

Make changes within the `packages/` directory.

Test modifications locally:


```bash
pnpm test
```

## 2. Registering Changes (Changesets)
Instead of manually updating the version in `package.json` files, use `changesets`:

Run the following command at the root:

```bash
pnpm changeset
```

### Follow the prompts in the terminal:
- Select the package(s) modified.
- Choose the version type (`patch`, `minor`, or `major`).
- Write a brief message describing the change (this will appear in `CHANGELOG.md`).

A new file will be generated in the `.changeset/` folder.

Commit this file along with your code changes.

## 3. Testing the changes
Before submitting your Pull Request, ensure your modifications meet the project's quality standards:

### Code Validation
Check that your code adheres to the defined linting rules:

```bash
pnpm lint
```

### Build Verification
Ensure the monorepo builds correctly to verify all dependencies and workspace configurations:

```bash
pnpm build
```

### Documentation Verification
#### Build Validation
Always verify that the documentation builds correctly without errors:

```bash
pnpm docs:build
```

#### Local Preview
Use the following to iterate and verify your changes in real-time:

```bash
pnpm dev:docs
```

### Running Tests
Execute the test suite to guarantee no regressions:

```bash
pnpm test
```
Note: GitHub Actions will automatically validate these steps when you open your Pull Request. PRs will not be eligible for merging if any of these checks fail.

## 4. Submission and Release
GitHub Actions handles the deployment process automatically.

Pushing changes to the main branch:

```bash
git add .
git commit -m "feat: your commit message"
git push
```

Automated Action:
GitHub Actions will detect the new file in `.changeset/.`
It will automatically create a Pull Request titled "Version Packages".