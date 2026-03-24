# Secure DAO Governance

This repository provides a complete Governance stack for decentralized organizations. It includes a Governance token with delegation capabilities, a Governor contract for voting, and a Timelock to secure the execution of successful proposals.

## Workflow
1. **Propose**: A member with enough tokens proposes a contract call.
2. **Vote**: Token holders vote (For, Against, or Abstain).
3. **Queue**: If passed, the proposal enters the Timelock.
4. **Execute**: After the delay (e.g., 2 days), anyone can trigger the execution.

## Configuration
- **Voting Delay**: 1 day (time before voting starts).
- **Voting Period**: 1 week (duration of the vote).
- **Proposal Threshold**: 1000 tokens required to propose.
- **Timelock Min Delay**: 2 days.
