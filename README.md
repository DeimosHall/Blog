# My personal blog
Hi, my name is Francisco Torres, this is my personal blog. If you want to contact me, please visit https://deimoshall.dev/contact.

## How to deploy

This is for myself, I sometimes left writting for a while and forget how to deploy the site. There a 8 steps.

1. Switch to the development branch and make the changes.

```
git checkout development
```

2. Test the changes with hugo

```
hugo server
```

3. Once the changes are done, add them to the staging area.

```
git add .
```

4. Commit the changes.

```
git commit -m "feat: add some content"
```

5. Create the site under the docs directory

```
hugo -d docs/
```

6. Commit the new page released that `hugo -d docs/` created.
```
git commit add .
git commit -m "feat: add new page"
```

6. Switch to the main branch

```
git checkout main
```

7. Merge the branches

```
git merge development
```

8. Upload the changes to Github

```
git push origin main
```

> I also should upload the changes from the development branch.

**And that's it! The changes will be available after a minute or more.**