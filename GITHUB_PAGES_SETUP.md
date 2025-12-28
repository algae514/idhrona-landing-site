# GitHub Pages Setup Instructions

## ✅ Completed Steps

1. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. ✅ Created CNAME file (`public/CNAME`) with `idhrona.com`
3. ✅ Configured Vite for production builds
4. ✅ Pushed changes to GitHub

## 🔧 Manual Steps Required

### Step 1: Enable GitHub Pages (if not auto-enabled)

The GitHub Actions workflow should automatically enable GitHub Pages, but if needed:

1. Go to: https://github.com/algae514/idhrona-landing-site/settings/pages
2. Under "Source", select: **GitHub Actions**
3. The workflow will automatically deploy on every push to `main`

### Step 2: Configure Custom Domain in GitHub

1. Go to: https://github.com/algae514/idhrona-landing-site/settings/pages
2. Under "Custom domain", enter: `idhrona.com`
3. Check **"Enforce HTTPS"** (this is important for SEO)
4. Click **Save**

**Note:** The CNAME file is already in the repository, so GitHub should detect it automatically.

### Step 3: GoDaddy DNS Configuration

Log in to your GoDaddy account and configure DNS records:

#### Option A: Using A Records (Recommended for root domain)

1. Go to GoDaddy DNS Management for `idhrona.com`
2. Delete any existing A records for `@` (root domain)
3. Add the following **A records** (GitHub Pages IPs):

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 |
   | A | @ | 185.199.109.153 | 600 |
   | A | @ | 185.199.110.153 | 600 |
   | A | @ | 185.199.111.153 | 600 |

4. Add/Update **CNAME record** for `www` subdomain:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | algae514.github.io | 600 |

#### Option B: Using CNAME (Alternative - only if A records don't work)

**Note:** Some DNS providers don't allow CNAME on root domain. If GoDaddy allows it:

1. Delete all A records for `@`
2. Add CNAME record:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | @ | algae514.github.io | 600 |

3. Add CNAME for www:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | algae514.github.io | 600 |

### Step 4: Verify DNS Propagation

After updating DNS records:

1. Wait 5-10 minutes for DNS propagation
2. Check DNS propagation: https://www.whatsmydns.net/#A/idhrona.com
3. Verify GitHub Pages recognizes your domain:
   - Go to: https://github.com/algae514/idhrona-landing-site/settings/pages
   - You should see a green checkmark next to your domain

### Step 5: SSL Certificate (Automatic)

GitHub Pages automatically provisions SSL certificates for custom domains. This may take:
- **5 minutes to 24 hours** after DNS is configured correctly
- You'll see "Certificate provisioned" in GitHub Pages settings

## 🔍 Verification Checklist

- [ ] GitHub Actions workflow runs successfully (check Actions tab)
- [ ] GitHub Pages is enabled and shows "Published" status
- [ ] Custom domain `idhrona.com` is configured in GitHub Pages settings
- [ ] "Enforce HTTPS" is enabled
- [ ] DNS records are configured in GoDaddy
- [ ] DNS propagation is complete (check with whatsmydns.net)
- [ ] SSL certificate is provisioned (green checkmark in GitHub)
- [ ] Site loads at https://idhrona.com
- [ ] Site redirects www.idhrona.com to idhrona.com (or vice versa)

## 🚨 Troubleshooting

### If site doesn't load:
1. Check DNS propagation: https://www.whatsmydns.net/#A/idhrona.com
2. Verify GitHub Actions workflow completed successfully
3. Check GitHub Pages settings for any error messages
4. Ensure CNAME file exists in `public/CNAME`

### If SSL certificate doesn't provision:
1. Ensure DNS records are correct
2. Wait up to 24 hours
3. Try removing and re-adding the custom domain in GitHub Pages settings

### If GitHub Pages shows "Not Found":
1. Ensure GitHub Actions workflow completed successfully
2. Check that the build output is in the `dist` folder
3. Verify the workflow is using the correct branch (`main`)

## 📝 Important Notes

1. **DNS Propagation**: Can take up to 48 hours, but usually completes within 1-2 hours
2. **SSL Certificate**: GitHub automatically provisions SSL, but it can take up to 24 hours
3. **HTTPS Enforcement**: Always enable this for SEO and security
4. **CNAME File**: The file in `public/CNAME` tells GitHub which domain to use
5. **Build Process**: The GitHub Actions workflow builds and deploys automatically on every push to `main`

## 🔗 Useful Links

- Repository: https://github.com/algae514/idhrona-landing-site
- GitHub Pages Settings: https://github.com/algae514/idhrona-landing-site/settings/pages
- GitHub Actions: https://github.com/algae514/idhrona-landing-site/actions
- DNS Checker: https://www.whatsmydns.net/#A/idhrona.com
