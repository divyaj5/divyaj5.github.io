---
name: Exploring and Visualizing Trends in BFRO Reports
tools: [Python, HTML, vega-lite, Altair]
image: assets/pngs/CoverPhoto.png
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

# Plot 2: UFO Sightings On A Map

Description: This map visualization displays the geographical distribution of UFO sightings, plotting the locations of reported sightings across various regions. The points on the map represent individual UFO sighting occurrences, allowing users to explore patterns and concentrations of sightings based on location.

Design Choices:
Encoding Type: The locations of the sightings are encoded as points on the map, with latitude and longitude used as the positional encoding. This provides a spatial representation of the data, making it easy to see where sightings are most frequent.
Color Scheme: If used, the points could be color-coded based on factors such as the year or the frequency of sightings in particular regions. For example, a gradient color scheme could represent sighting frequency, where lighter colors represent fewer sightings and darker colors indicate more sightings.

Data Transformations:
The dataset was cleaned to ensure only valid geographic coordinates (latitude and longitude) were used for mapping. Any missing or inconsistent location data were removed to avoid errors in the visualization.
If relevant, the data could also be aggregated by region (e.g., by city, state, or country) to highlight regional trends in sightings.

Interactivity:
Tooltip: Tooltips can provide additional information when hovering over individual points, such as the date of the sighting or a brief description of the event, enhancing user engagement and providing more context for each sighting. ..

<vegachart schema-url="{{ site.baseurl }}/assets/json/UFOSightingsOnMap.json" style="width: 100%"></vegachart>


<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_data/main/bfro_reports_fall2022.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/divyaj5/divyaj5.github.io/blob/main/python_notebooks/Exploring%20and%20Visualizing%20Trends%20in%20BFRO%20Reports.ipynb" text="The Analysis" %}
</div>

