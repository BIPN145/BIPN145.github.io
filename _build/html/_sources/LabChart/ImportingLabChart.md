# Importing LabChart Files into Excel

## On Windows
1. Open a New Sheet in Excel.
2. Go to `File > Open > Browse` and navigate to where your text file is saved.
3. <mark>Change the file type to “All files” and open your .txt file.</mark>
4. In the next window(s), hit Next. In the following (screenshot below) make sure that the Delimiter is set to Tab, and click Finish. The data preview should have multiple separated columns and look something like this:
![Step 4](importing_windows_1.png)
5. This file will have multiple columns. The first column will contain the timestamps for your experiment, in seconds. The second column will be the first channel of data that you’ve exported. In the example above, it is the stimulus channel. The third column will be the second channel of data, etc.
:::{note}
If you have exported all of your data, each page of your experiment will be vertically concatenated. In other words, it will start at 0 and go to the end of Page 1, and then start at 0 again for the next page.
:::
6. Select the cells containing the data you would like to plot (if you exported the stimulus channel, it’s the third column; if you didn’t export the stimulus channel, this should be the second column of your file).
7. Go to `Insert > Line Chart`.
8. To add the correct time axis labels, right click on the chart and choose “Select Data.”
9. In the next window, under “Horizontal (Category) Axis Labels” choose “Edit.” In the window that pops up, select all of the time values (the first column of your file). 
10. From here, you might need to adjust the Horizontal Axis crossings in order to prevent the X axis from directly crossing your data (since your data will likely hover around zero, where the axis goes by default). For example, you might want to have your X axis cross at -100 mV, so that it doesn’t overlap with your data.
11. Format your plot with axes labels and a title, and make any additional changes as necessary.

## On Mac