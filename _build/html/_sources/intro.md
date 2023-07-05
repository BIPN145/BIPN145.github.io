# BIPN 145 Digital Manual

This website contains code & tutorials to help you analyze & visualize your data for neurobiology lab (BIPN 145).

## How to use this online manual

Several pages in this manual contain written or video guides to working with the software and data in BIPN 145. However, other pages are meant to be used as interactive coding notebooks.

### Interacting with code
To interact with the coding tutorials presented here, navigate to the page with the tutorial (e.g.,  "Importing Labchart (Python)"). On these pages, you'll see a rocket icon in the top right corner. Click on this, and choose Colab. This will launch Google Colab, where you can run the code in the notebook.

Alternatively, you can copy and paste the code you see here into a Python editor of your choice, e.g., a fresh Google Colab notebook, Jupyter Notebook, or Spyder (found on the computers in lab).

```
# Code blocks look like this!
# If you hover, there's an option to copy the contents.
```

### Uploading data to Colab
To work with exported LabChart data in Python, you'll either need to upload the file to Colab or put it in Google Drive & mount your drive.

**Option #1**: To upload a file, click the Directory icon on the left hand side of the window. Then, click the file upload button. There is a video of how to do this below:

<iframe width="640" height="364" src="https://www.loom.com/embed/830c178cc78447b68156cd8ff1423fb3?sid=218e6c4b-b93e-4ac3-a56a-b03cac1f4e3c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


**Option #2** 
1. To mount your drive, click the Directory icon on the left hand side of the window.
2. Click the Google Drive icon.
3. Colab will create a new cell in the notebook and prompt you to run it.
4. If it's the first time, a separate window will pop up to ask you for access to your Drive.
5. Click "Allow".
6. After a few seconds, a message will print that your Drive has been mounted.
7. Now, you can use the location of your file in a filepath that starts with `/content/drive`.

### Saving work in Colab
You can save a Colab file that you've edited just like any other file! In Colab, go to `File > Save a copy in Drive`. These files will show up in a folder called "Colab Notebooks" in your Drive.