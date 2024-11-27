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

# Plot 2: Big Foot Sightings By State

Description: In this plot, we visualize the number of Bigfoot sightings by state, using a bar chart to display the frequency of sightings across different regions in the U.S. Each bar represents a state, with the height of the bar corresponding to the number of sightings reported in that state. The data is aggregated by state, and the count of sightings is computed using the groupby() function in pandas.

Design Choices:

For the design choices, I used the bar chart type because it is effective for comparing discrete quantities across different categories—in this case, the states. I encoded the state variable on the x-axis as a nominal (categorical) variable, which represents the different states, and the sightings_count on the y-axis as a quantitative (continuous) variable, indicating the number of sightings. I also used the color encoding to differentiate the states, applying distinct colors to each state. This helps in visually distinguishing the regions more easily. The color encoding also adds an extra layer of information, emphasizing that the data represents different geographic regions. The color scheme was chosen to be visually distinct to ensure clarity and accessibility.

Data Transformations:

In terms of data transformations, the dataset was initially loaded directly from the source, and I performed a groupby operation on the state column to aggregate the data by state. This step was crucial to calculate the number of sightings for each state, which was then plotted in the chart. No other significant data transformations were required for this plot.

Interactivity:

For the interactivity aspect, I added zoom and pan capabilities to the bar chart using Altair’s interactive() function. This allows users to zoom in on specific states, making it easier to focus on regions with a larger or smaller number of sightings. The interactivity improves the user experience by enabling a more detailed exploration of the data without overwhelming the viewer with all the information at once. The zoom and pan functionality in the plot provides valuable interactivity, particularly for users who may be interested in focusing on specific states with a larger or smaller number of sightings. This interactivity allows for a deeper exploration of the data, especially when the chart contains a large number of states. Users can select a region of the chart to zoom in, providing a more granular view of the sightings data. The inclusion of this interactive feature adds flexibility to the visualization, making it easier for users to analyze trends in specific parts of the dataset.

<vegachart schema-url="{{ site.baseurl }}/assets/json/BigfootSightingsbyState.json" style="width: 100%"></vegachart>


<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_data/main/bfro_reports_fall2022.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/divyaj5/divyaj5.github.io/blob/main/python_notebooks/Exploring%20and%20Visualizing%20Trends%20in%20BFRO%20Reports.ipynb" text="The Analysis" %}
</div>

