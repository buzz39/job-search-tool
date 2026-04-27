---
title: "Boolean Search Operators Cheat Sheet (2026): Every Operator, Every Platform"
description: "The complete Boolean search operators cheat sheet for job seekers and recruiters. AND, OR, NOT, parentheses, quotes, wildcards, site:, intitle: and more — with copy-paste examples for LinkedIn, Indeed, Google and Glassdoor."
date: "2026-04-27"
author: "Job Search Query Builder"
tags: ["Boolean Search", "Cheat Sheet", "Job Search Tips", "Recruiting"]
---

If you've ever Googled "Boolean search operators" and ended up with five different answers, you're not crazy — every platform interprets them slightly differently. This cheat sheet fixes that. One page, every operator, with copy-paste examples that actually work in 2026 on LinkedIn, Indeed, Glassdoor and Google.

Bookmark it. Or skip the memorization entirely and use our free [Boolean Search Query Builder](/) to generate strings in one click.

## The 7 Core Boolean Operators

These are the operators you'll use 95% of the time. Master these and you can build almost any search.

| Operator | What it does | Example |
|----------|--------------|---------|
| `AND` | Both terms must appear | `python AND django` |
| `OR` | Either term can appear | `developer OR engineer` |
| `NOT` (or `-`) | Excludes the term | `manager NOT senior` |
| `" "` | Exact phrase match | `"machine learning engineer"` |
| `( )` | Groups logic together | `(python OR ruby) AND remote` |
| `*` | Wildcard / partial match | `engineer*` matches engineering, engineers |
| `site:` | Restricts to one domain | `site:lever.co "remote"` |

A few quick rules that trip people up:

- **Operators must be CAPITALIZED** on LinkedIn, Indeed and most ATS platforms. Lowercase `and` is treated as the word "and".
- **No space between `-` and the term**: `-recruiter` works, `- recruiter` doesn't.
- **Parentheses are non-negotiable** when mixing AND/OR. `developer OR engineer AND remote` is ambiguous; `(developer OR engineer) AND remote` is precise.

## Copy-Paste Cheat Sheet by Platform

### LinkedIn (Jobs + People + Posts)

LinkedIn supports `AND`, `OR`, `NOT`, parentheses, and quotes. It does **not** support wildcards or `site:`.

```
("data engineer" OR "data scientist") AND (python OR sql) NOT (lead OR manager)
```

Use this in the LinkedIn search bar with filters set to "Jobs" or "People". For X-Ray (searching LinkedIn from Google), see our [LinkedIn X-Ray search guide](/blog/linkedin-xray-search).

### Indeed

Indeed uses the same core operators plus a few extras:

- `title:` — search only job titles
- `company:` — search by employer

```
title:("software engineer" OR "backend engineer") AND (golang OR rust) NOT title:(senior OR lead)
```

Full breakdown in our [Indeed Boolean search guide](/blog/boolean-search-indeed).

### Glassdoor

Glassdoor's Boolean support is the weakest of the big three but quotes and `OR` reliably work:

```
"product manager" AND ("fintech" OR "saas") AND remote
```

More in our [Glassdoor Boolean walkthrough](/blog/boolean-search-glassdoor).

### Google (X-Ray for hidden jobs)

Google is the most powerful Boolean engine — it supports everything plus advanced operators:

| Operator | Use it for |
|----------|------------|
| `site:` | Limit to a domain (`site:greenhouse.io`) |
| `intitle:` | Word must be in page title |
| `inurl:` | Word must be in URL |
| `filetype:` | PDF/DOC searches (`filetype:pdf "job description"`) |
| `intext:` | Word must appear in body text |
| `-` | Exclude (`-careers -apply`) |

Find unlisted jobs on ATS platforms:

```
site:greenhouse.io ("software engineer" OR "swe") "remote" -intern
```

Find resumes:

```
(intitle:"resume" OR intitle:"cv") "react" "typescript" "remote" -job -jobs -hiring
```

We've got a deep dive on [Google search operators for remote jobs](/blog/find-remote-jobs-google-search-operators) and a fuller [Google Dorks for job search](/blog/google-dorks-job-search) post too.

## The 10 Most Useful Boolean Strings (Steal These)

Copy, swap the keywords, paste. That's it.

**1. Senior remote engineer roles, no recruiters in the noise**
```
("senior software engineer" OR "staff engineer") AND remote AND (python OR go) NOT recruiter
```

**2. Startup PM jobs at Series A/B companies**
```
"product manager" AND ("series a" OR "series b") AND (saas OR fintech) -enterprise
```

**3. Hidden jobs on Lever and Greenhouse via Google**
```
(site:lever.co OR site:greenhouse.io) "data engineer" "remote" "United States"
```

**4. Designers open to contract work**
```
("ux designer" OR "product designer") AND (contract OR freelance) AND ("open to work" OR "available")
```

**5. Recruiters: find passive candidates**
```
("software engineer" OR developer) AND (kubernetes AND aws) NOT (intern OR junior OR student)
```

**6. ATS-bypass: find application links directly**
```
inurl:apply AND ("backend engineer" OR "platform engineer") AND remote
```

**7. Jobs posted in last 30 days (combine with site filters)**
```
site:linkedin.com/jobs "machine learning" "remote" "posted 1 week ago"
```

**8. Companies actively hiring (multiple roles)**
```
"we're hiring" OR "now hiring" OR "join our team" AND "react" AND remote
```

**9. PDF job descriptions (often higher-quality roles)**
```
filetype:pdf "job description" "principal engineer" -template
```

**10. Founder/early-stage roles**
```
("founding engineer" OR "first engineer" OR "engineer #1") AND (equity OR YC OR "y combinator")
```

## Common Boolean Search Mistakes

A quick gut-check list — if your searches are returning weird results, one of these is usually why. We covered the full list in [Boolean search mistakes to avoid](/blog/boolean-search-mistakes-to-avoid):

- ❌ Lowercase `and`, `or`, `not` — must be UPPERCASE on LinkedIn/Indeed
- ❌ Mismatched parentheses
- ❌ Forgetting quotes around multi-word phrases (`product manager` vs `"product manager"`)
- ❌ Stacking too many `OR`s — over ~6 and most platforms truncate
- ❌ Using `NOT` at the start of a query — always needs a positive term first
- ❌ Smart quotes (`"like this"`) instead of straight quotes (`"like this"`) — copy-pasting from Word breaks searches

## Quick Reference: Operator Support Matrix

| Operator | LinkedIn | Indeed | Glassdoor | Google |
|----------|:--------:|:------:|:---------:|:------:|
| `AND` | ✅ | ✅ | ✅ | ✅ (implicit) |
| `OR` | ✅ | ✅ | ✅ | ✅ |
| `NOT` / `-` | ✅ | ✅ | ⚠️ | ✅ |
| `" "` | ✅ | ✅ | ✅ | ✅ |
| `( )` | ✅ | ✅ | ⚠️ | ✅ |
| `*` wildcard | ❌ | ❌ | ❌ | ✅ |
| `site:` | ❌ | ❌ | ❌ | ✅ |
| `title:` | ❌ | ✅ | ❌ | ❌ |
| `intitle:` | ❌ | ❌ | ❌ | ✅ |
| `filetype:` | ❌ | ❌ | ❌ | ✅ |

## Stop Memorizing — Start Building

Here's the honest truth: you don't need to memorize any of this. The whole reason we built [BooleanJobs.xyz](/) was to make Boolean searches as easy as filling out a form. Pick your role, location, must-haves and excludes — and we generate platform-perfect strings for LinkedIn, Indeed, Glassdoor and Google.

But if you do want to flex the syntax manually, this cheat sheet is everything you need. Bookmark it, share it with your job-hunt friends, and go find that role.

**Next reads:**
- [Boolean Search String Builder for Recruiters](/blog/boolean-search-string-builder-recruiters)
- [Boolean Search Examples for Software Engineer Jobs](/blog/boolean-search-examples-software-engineer-jobs)
- [LinkedIn vs Indeed vs Glassdoor for Boolean Search](/blog/linkedin-vs-indeed-vs-glassdoor)
