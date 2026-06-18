window.BENCHMARK_DATA = {
  "lastUpdate": 1781784759163,
  "repoUrl": "https://github.com/GabrielleMi/dev-vault",
  "entries": {
    "Vitest Performance Run": [
      {
        "commit": {
          "author": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "committer": {
            "name": "GabrielleMi",
            "username": "GabrielleMi"
          },
          "id": "080e0927e28e05ee174b6aa6cada5fcb9290f25d",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/080e0927e28e05ee174b6aa6cada5fcb9290f25d"
        },
        "date": 1781784758400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7598891,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 6148012,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6314950,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5940611,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6556300,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 13426289,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 23779,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 19242,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 13123,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 18196,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 245,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 246,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 590,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 116,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16619,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8657,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 12545,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 14108,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 120602,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 95,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 39,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 93,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 14254,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 10881,
            "unit": "hz"
          }
        ]
      }
    ]
  }
}