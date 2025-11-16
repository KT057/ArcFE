#!/bin/bash
set -e

if [ -n "$SSH_PRIVATE_KEY" ]; then
  echo "🔑 Setting up SSH key..."

  mkdir -p ~/.ssh
  chmod 700 ~/.ssh

  echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_ed25519
  chmod 600 ~/.ssh/id_ed25519

  ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null
  chmod 644 ~/.ssh/known_hosts

  cat > ~/.ssh/config <<EOF
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  StrictHostKeyChecking accept-new
EOF
  chmod 644 ~/.ssh/config

  echo "✅ SSH key setup complete"
else
  echo "⚠️  SSH_PRIVATE_KEY not found. Skipping SSH setup."
fi
