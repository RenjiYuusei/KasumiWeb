# Troubleshooting Guide

## Common Build Issues & Solutions

### Issue 1: "Module not found" errors
**Cause**: Dependencies not installed
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 2: ESLint errors during build
**Cause**: ESLint version mismatch or configuration issues
**Solution**:
```bash
npm run lint -- --fix
npm run build
```

### Issue 3: Port 3000 already in use (dev only)
**Cause**: Another process using the port
**Solution**:
```bash
npm run dev -- -p 3001
# Or kill the process using port 3000
# Linux/Mac: lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
# Windows: netstat -ano | findstr :3000 (note the PID, then taskkill /PID [PID] /F)
```

### Issue 4: TypeScript errors
**Cause**: Type mismatches or missing type definitions
**Solution**:
```bash
npm run build -- --debug
# Check error messages and fix types
# or run: npx tsc --noEmit (to check types without building)
```

### Issue 5: Tailwind CSS not working
**Cause**: Build process incomplete or CSS not imported
**Solution**:
1. Verify `globals.css` is imported in `app/layout.tsx`
2. Check `tailwind.config.ts` paths are correct
3. Clear .next folder: `rm -rf .next && npm run build`

### Issue 6: API endpoints returning 404
**Cause**: Route file naming convention not followed
**Solution**:
1. Verify files are named `route.ts` (not `api.ts`)
2. Verify folder structure: `/app/api/[endpoint]/route.ts`
3. Restart dev server

### Issue 7: Particles background not showing
**Cause**: Canvas not rendering or JavaScript disabled
**Solution**:
1. Check browser console for errors
2. Verify `ParticlesBackground` is imported in layout
3. Check that JavaScript is enabled
4. Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)

### Issue 8: Build fails on Netlify
**Cause**: Node version mismatch or environment variables missing
**Solution**:
1. Check Netlify build logs for specific error
2. Set Node version in `netlify.toml`:
   ```toml
   [build]
   command = "npm run build"
   publish = ".next"
   
   [build.environment]
   NODE_VERSION = "18"
   ```
3. Verify environment variables in Netlify dashboard

### Issue 9: Vercel deployment fails
**Cause**: Missing environment variables or build timeout
**Solution**:
1. Check Vercel deployment logs
2. Add any required environment variables in Vercel dashboard
3. Increase build timeout if needed
4. Ensure GitHub branch is connected

### Issue 10: Copy button not working
**Cause**: Browser doesn't support Clipboard API or running on non-HTTPS
**Solution**:
1. Use HTTPS in production
2. Check browser compatibility (all modern browsers support it)
3. Check browser console for permission errors
4. Fallback: Use the `copyToClipboard` function from `lib/utils.ts`

---

## Performance Issues

### Slow build time
**Solution**:
```bash
# Use SWC minification (enabled by default)
# Clear cache
npm cache clean --force
rm -rf .next node_modules
npm install
npm run build
```

### Slow dev server
**Solution**:
1. Check for large files in public folder
2. Use `npm run dev -- --turbo` (if using Turbopack)
3. Check for infinite loops in useEffect hooks
4. Profile with Chrome DevTools

### High memory usage
**Solution**:
1. Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`
2. Check for memory leaks in client components
3. Remove unused dependencies

---

## Runtime Issues

### "useSearchParams" causes hydration mismatch
**Cause**: Server/client rendering mismatch
**Solution**: Already fixed in `VerifyPageContent.tsx` with proper client component setup
- Ensure component has `'use client'` directive
- Wrap dynamic code in `useEffect`

### API endpoint not handling errors
**Solution**: Check error handling in `/app/api/[endpoint]/route.ts`
- Wrap in try-catch
- Return proper HTTP status codes
- Log errors server-side only

### State not persisting between navigations
**Cause**: Using local state instead of URL parameters
**Solution**: 
- For verification code: Use URL query params (already implemented)
- For other data: Use server-side session/database

---

## Environment Setup

### Required environment variables
None required for basic functionality. For production:
```bash
# .env.local
NEXT_PUBLIC_APP_NAME=Kasumi
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional environment variables
```bash
# For email service (not yet implemented)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# For database (not yet implemented)
DATABASE_URL=postgresql://user:password@localhost/kasumi
```

---

## Testing

### Test locally
```bash
# Development
npm run dev

# Production
npm run build
npm run start
```

### Test API endpoints
```bash
# Subscribe
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Verify
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{"code":"TESTCODE123456"}'
```

---

## Git Issues

### Merge conflicts with main branch
**Solution**:
```bash
git fetch origin
git rebase origin/main
# Resolve conflicts in your editor
git add .
git rebase --continue
git push origin nextjs-migration --force
```

### Branch cleanup
**Solution**:
```bash
# Delete old v0 branches
git branch -d v0/renjiyuusei-34789b9e
git push origin --delete v0/renjiyuusei-34789b9e
```

---

## Support

If you encounter issues not listed here:

1. Check the [BUILD_VERIFICATION.md](./BUILD_VERIFICATION.md) for project status
2. Review error messages carefully - they often contain the solution
3. Check [Next.js Documentation](https://nextjs.org/docs)
4. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
5. Check browser console for JavaScript errors
6. Try clearing cache: `npm cache clean --force` and `rm -rf .next`

---

**Last Updated**: 2026-03-22
