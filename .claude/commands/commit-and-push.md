---
description: Check git diff, create commit, and push to remote
---

Please perform the following steps to commit and push changes:

1. Run `git status` to see which files have been modified
2. Run `git diff` to show the detailed changes
3. Analyze the changes and create an appropriate commit message that:
   - Summarizes what was changed
   - Uses conventional commit format (e.g., "feat:", "fix:", "refactor:", "docs:", "chore:")
   - Is concise but descriptive
4. Run `git add .` to stage all changes
5. Run `git commit -m "<your commit message>"` with the generated message
6. Run `git push origin master` to push to remote

Make sure to:
- Review the changes before committing
- Create a meaningful commit message based on the actual changes
- Handle any merge conflicts if they occur during push
