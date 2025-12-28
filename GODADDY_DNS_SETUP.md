# GoDaddy DNS Configuration for idhrona.com

## Quick Setup Guide

### Step 1: Access GoDaddy DNS Management

1. Log in to your GoDaddy account
2. Go to **My Products** → **Domains**
3. Click on **idhrona.com**
4. Click on **DNS** tab (or **Manage DNS**)

### Step 2: Configure DNS Records

#### Delete Existing Records (if any)
- Remove any existing **A records** for `@` (root domain)
- Remove any existing **CNAME records** for `@` if they conflict

#### Add New A Records (Root Domain)

Add these **4 A records** for the root domain (`@`):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds (or 1 hour) |
| A | @ | 185.199.109.153 | 600 seconds (or 1 hour) |
| A | @ | 185.199.110.153 | 600 seconds (or 1 hour) |
| A | @ | 185.199.111.153 | 600 seconds (or 1 hour) |

**How to add in GoDaddy:**
1. Click **Add** button
2. Select **A** from Type dropdown
3. Enter `@` in Name field (or leave blank if GoDaddy auto-fills)
4. Enter one of the IP addresses above
5. Set TTL to 600 seconds (or 1 hour)
6. Click **Save**
7. Repeat for all 4 IP addresses

#### Add CNAME Record (WWW Subdomain)

Add this **CNAME record** for the `www` subdomain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | algae514.github.io | 600 seconds (or 1 hour) |

**How to add in GoDaddy:**
1. Click **Add** button
2. Select **CNAME** from Type dropdown
3. Enter `www` in Name field
4. Enter `algae514.github.io` in Value field
5. Set TTL to 600 seconds (or 1 hour)
6. Click **Save**

### Step 3: Verify Configuration

Your DNS records should look like this:

```
Type    Name    Value                  TTL
----    ----    -----                  ---
A       @       185.199.108.153         600
A       @       185.199.109.153         600
A       @       185.199.110.153         600
A       @       185.199.111.153         600
CNAME   www     algae514.github.io      600
```

### Step 4: Wait for DNS Propagation

- **Typical time**: 5 minutes to 2 hours
- **Maximum time**: Up to 48 hours (rare)

**Check propagation status:**
- Visit: https://www.whatsmydns.net/#A/idhrona.com
- All locations should show the GitHub Pages IPs (185.199.108.x - 185.199.111.x)

### Step 5: Configure GitHub Pages Custom Domain

1. Go to: https://github.com/algae514/idhrona-landing-site/settings/pages
2. Under **"Custom domain"**, enter: `idhrona.com`
3. ✅ Check **"Enforce HTTPS"** (CRITICAL for SEO)
4. Click **Save**

**Note:** The CNAME file is already in your repository, so GitHub will detect it automatically.

### Step 6: Wait for SSL Certificate

GitHub Pages will automatically provision an SSL certificate:
- **Typical time**: 5-30 minutes after DNS is configured
- **Maximum time**: Up to 24 hours

You'll see a green checkmark ✅ in GitHub Pages settings when the certificate is ready.

## ✅ Verification Checklist

After completing the steps above:

- [ ] All 4 A records are added in GoDaddy
- [ ] CNAME record for www is added
- [ ] DNS propagation is complete (check whatsmydns.net)
- [ ] GitHub Pages custom domain is configured
- [ ] "Enforce HTTPS" is enabled in GitHub
- [ ] SSL certificate is provisioned (green checkmark)
- [ ] Site loads at https://idhrona.com
- [ ] Site loads at https://www.idhrona.com

## 🚨 Common Issues & Solutions

### Issue: "Site not loading"
**Solution:**
- Wait for DNS propagation (check whatsmydns.net)
- Verify all 4 A records are added correctly
- Ensure GitHub Actions workflow completed successfully

### Issue: "SSL certificate not provisioning"
**Solution:**
- Verify DNS records are correct
- Wait up to 24 hours
- Try removing and re-adding custom domain in GitHub Pages settings

### Issue: "GitHub Pages shows 'Not Found'"
**Solution:**
- Check GitHub Actions workflow completed successfully
- Verify workflow is using GitHub Actions (not branch deployment)
- Go to Settings → Pages → Source should be "GitHub Actions"

## 📞 Need Help?

- **GitHub Actions Status**: https://github.com/algae514/idhrona-landing-site/actions
- **GitHub Pages Settings**: https://github.com/algae514/idhrona-landing-site/settings/pages
- **DNS Checker**: https://www.whatsmydns.net/#A/idhrona.com

## 🔒 SEO Optimization Maintained

All your SEO work remains optimized:
- ✅ Custom domain preserves all meta tags
- ✅ HTTPS enforcement improves SEO ranking
- ✅ Structured data (JSON-LD) remains intact
- ✅ Canonical URLs point to idhrona.com
- ✅ All Open Graph and Twitter Card meta tags preserved
