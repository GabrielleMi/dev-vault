window.BENCHMARK_DATA = {
  "lastUpdate": 1781784324832,
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
          "id": "815cd19354c94c6d93f9998e2c1dc451f2a41128",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/815cd19354c94c6d93f9998e2c1dc451f2a41128"
        },
        "date": 1781783432278,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 5168454,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 4192458,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 4342484,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 4003434,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 4499650,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 12356904,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 16148,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 12995,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 8690,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 12524,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 150,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 153,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 406,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 83,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16385,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8737,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 13372,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 13036,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 131406,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 87,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 38,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 86,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 13486,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 9967,
            "unit": "hz"
          }
        ]
      },
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
          "id": "618f1c25912d0e2db17f68e21c6f2eaa11cf7a0c",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/618f1c25912d0e2db17f68e21c6f2eaa11cf7a0c"
        },
        "date": 1781783576668,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7429457,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 5766714,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6146028,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5601984,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6381954,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 12461798,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 23192,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 19775,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 12956,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 18520,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 243,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 253,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 634,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 107,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16987,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 9007,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 12753,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 14047,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 119746,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 94,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 40,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 92,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 14236,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 10834,
            "unit": "hz"
          }
        ]
      },
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
          "id": "ce143879adf0f5cdf095df3d4ee759657f9049f9",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/ce143879adf0f5cdf095df3d4ee759657f9049f9"
        },
        "date": 1781783718144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 8114208,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 6127699,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6422624,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5871128,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6749521,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 13694006,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 23573,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 18733,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 13205,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 18117,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 244,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 253,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 631,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 118,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 16903,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8896,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 12731,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 13876,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 118408,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 88,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 38,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 89,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 13809,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 10471,
            "unit": "hz"
          }
        ]
      },
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
          "id": "fda81e01e018b131315f38d56624082dfe68a9d9",
          "message": "chore: benchmarks",
          "timestamp": "2026-06-17T16:53:01Z",
          "url": "https://github.com/GabrielleMi/dev-vault/pull/28/commits/fda81e01e018b131315f38d56624082dfe68a9d9"
        },
        "date": 1781784111130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 7688223,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 5881780,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 6110236,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 5804547,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 6156160,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 13389480,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 22264,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 17493,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 12144,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 17019,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 217,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 221,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 620,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 108,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 14573,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 8413,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 12986,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 12001,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 125754,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 84,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 40,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 82,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 12365,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 9622,
            "unit": "hz"
          }
        ]
      },
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
        "date": 1781784323693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Simple access (1 level)",
            "value": 10323001,
            "unit": "hz"
          },
          {
            "name": "Deep nested path (4 levels)",
            "value": 8104470,
            "unit": "hz"
          },
          {
            "name": "Array access",
            "value": 8556638,
            "unit": "hz"
          },
          {
            "name": "Deep complex mixed path",
            "value": 7735389,
            "unit": "hz"
          },
          {
            "name": "Early failure (Non-existent path in the middle)",
            "value": 8935469,
            "unit": "hz"
          },
          {
            "name": "Edge case (Empty string key)",
            "value": 17392038,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Simple key",
            "value": 30507,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Deep path (3 levels)",
            "value": 25081,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match (Levenshtein) - Threshold 0.8",
            "value": 16454,
            "unit": "hz"
          },
          {
            "name": "Multi-term Search - Exact match",
            "value": 23753,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan flat key",
            "value": 311,
            "unit": "hz"
          },
          {
            "name": "Exact Match - Linear scan deep path",
            "value": 315,
            "unit": "hz"
          },
          {
            "name": "Case Sensitive vs Normalized scan",
            "value": 818,
            "unit": "hz"
          },
          {
            "name": "Fuzzy Match - High execution cost scale",
            "value": 146,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 17429,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 10626,
            "unit": "hz"
          },
          {
            "name": "Deep nested path sort (Deep path)",
            "value": 16261,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 14605,
            "unit": "hz"
          },
          {
            "name": "Custom callback function sort (SortKeyFn)",
            "value": 141817,
            "unit": "hz"
          },
          {
            "name": "Simple property sort (String path)",
            "value": 96,
            "unit": "hz"
          },
          {
            "name": "Multi-criteria sort (Multi-keys)",
            "value": 50,
            "unit": "hz"
          },
          {
            "name": "Specific key configuration sort (SortKeyConfig)",
            "value": 99,
            "unit": "hz"
          },
          {
            "name": "Without global options (Uses default cache)",
            "value": 15288,
            "unit": "hz"
          },
          {
            "name": "With custom sensitivity options (Cache key generation)",
            "value": 11956,
            "unit": "hz"
          }
        ]
      }
    ]
  }
}