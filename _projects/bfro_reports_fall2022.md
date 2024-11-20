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


# Plot 1: Word Cloud of Report Descriptions
Description: This plot visualizes the most frequent words extracted from descriptions in BFRO reports, highlighting common terms mentioned in observed experiences.

Design Choices:
Encoding Type: The word cloud displays word frequency, with word size representing frequency. The encoding is implicit as larger words are those mentioned more often.
Color Scheme: The color scheme is default to WordCloud, with varied shades of color for different words based on frequency. I chose this to create visual distinction without overwhelming the viewer.

Data Transformations:
The data underwent cleaning by removing non-alphabetic characters and common stopwords using the NLTK library. This ensures the word cloud highlights meaningful terms relevant to the report descriptions.
The descriptions column was processed by converting text to lowercase and stripping out non-letter characters to improve the accuracy of word frequency analysis.

Interactivity:
No interactivity was applied to the word cloud, as its purpose is to provide a general overview of word frequencies.

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

