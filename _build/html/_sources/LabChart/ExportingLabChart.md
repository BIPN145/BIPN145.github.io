# Exporting LabChart Files
This page will help you **export** the raw values from your LabChart recordings as a text file that we can read into either Excel or Python. 

:::{note}
This will work for LabChart8 but not LabChart Reader. In other words, you should do this step **before** you leave lab!
:::

## Video Tutorial
<iframe width="640" height="400" src="https://www.loom.com/embed/639e04ee42e9410b93cd56e6e0750561?sid=b02a3485-0d5f-4a9e-b4a2-2b74c77ad085" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Written Tutorial
1. Select the data you would like to save by clicking and dragging in the window that contains your recording. See the video tutorial above for how to do this.
2. In LabChart, go to `File > Export`.
3. By default, LabChart will offer to export it as a Text File. In the first window that pops up, choose a name and location for your file and press Save.
4. In the following window, you have options for how your exported file will look. In most cases in this class, you will want to export just **one** channel of data and **just** the current selection.

:::{danger}
Make sure you choose “Current selection." If you do not do this, the Python script will not work and the data will be very hard to wrangle in Google Sheets or Excel.
:::

5. Once you are done exporting your data, you can import it using Excel or Python.