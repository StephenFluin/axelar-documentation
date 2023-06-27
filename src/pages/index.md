---
layout: ../layouts/MainLayout.astro
title: What is Axelar?
---

Axelar delivers secure cross-chain communication for Web3, enabling you to build Interchain dApps that grow beyond a single chain. _Secure_ means Axelar is built on proof-of-stake, the battle-tested approach used by Ethereum, Polygon, Cosmos, and more. _Cross-chain communication_ means you can build a complete experience for your users that lets them interact with any asset, any application, on any chain with one click.

<style>
    .card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        grid-auto-flow:row;
    }
    .card {
        border: 1px solid #ccc;
        margin-right:16px;
        display:flex;
        flex-direction:column;
    }
    .card div:nth-child(1) {
        font-weight:bold;
    }
    .card div:nth-child(2) {
        flex-grow:1;
    }
    </style>

<div class="card-grid">{% for card in index %}<div class="card">
              <div>{{card.icon}} {{card.title}}</div>
            <div>{{card.description}}</div>
            <a href="{{card.url}}">Get Started <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="mt-0.5" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          </div>{% endfor %}</div>

arbitrary JS island

## Learn more about Axelar

{% island 'components/index/url-list.jsx' %}{%endisland%}
