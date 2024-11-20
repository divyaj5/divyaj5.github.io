---
name: Exploring and Visualizing Trends in BFRO Reports
tools: [Python, HTML, vega-lite, Altair]
image: assets/pngs/cars.png
description: This notebook explores and visualizes trends in BFRO (Bigfoot Field Researchers Organization) reports, using data analysis and interactive visualizations to uncover patterns over time and across various factors.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# Plot 1: Bar Chart of Most Frequent Words
Description: This bar chart displays the top 100 most frequent words found in the descriptions of BFRO reports. It visually represents the word count frequency, providing a clear and concise way to identify which terms are most commonly mentioned across the reports.

Design Choices:

Encoding Type: The bar chart uses horizontal bars where the length of the bars corresponds to the frequency of each word, and the words themselves are displayed along the y-axis. This is a clear representation of word frequency in a straightforward format.
Color Scheme: The bars are colored according to their frequency, with darker colors indicating higher frequencies. This choice helps to quickly highlight the most frequent words and provides visual emphasis on them.
Data Transformations:

The original descriptions of the BFRO reports were cleaned to remove non-alphabetical characters and common stopwords (such as "the", "and", "a"), ensuring that the analysis focuses on meaningful words. The text was then split into individual words, and word frequencies were calculated. Only the top 100 most frequent words were selected for display in the bar chart.
Interactivity:

Tooltip: Tooltips have been included, which display the word and its corresponding frequency when you hover over any of the bars. This interaction adds a layer of clarity, allowing users to explore the exact values behind each bar and making the visualization more engaging.

<vegachart schema-url="{{ site.baseurl }}/assets/json/wordchart.json" style="width: 100%"></vegachart>

## Search The Data & Methods

Below is where we can put some links to both the data and the analysis code as buttons:

```
<div class="left">
{% include elements/button.html link="https://github.com/vega/vega/blob/main/docs/data/cars.json" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://blog.4dcu.be/programming/2021/05/03/Interactive-Visualizations.html" text="The Analysis" %}
</div>
```

<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://github.com/vega/vega/blob/main/docs/data/cars.json" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/jnaiman/online_cv_public/blob/main/python_notebooks/test_generate_plots.ipynb" text="The Analysis" %}
</div>

