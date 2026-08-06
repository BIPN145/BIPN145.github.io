# BIPN 145 Digital Manual

Welcome to our course! 🪱

This website contains the syllabus, lab protocols, and Python code  to help you complete your experiments for Neurobiology Lab (BIPN 145) at UC San Diego.

Most of the pages in this manual contain written or video guides to completing experiments in BIPN 145. Other pages are interactive coding notebooks, which you can use to analyze and visualize your data.

## Lab Manual

This website contains a full online version of our lab manual. You can also <a href="../_static/LabManual.pdf">download the full lab manual as a PDF</a>. You're encouraged to print this manual so that you have a hard copy in lab with you.

### Saving a page as a PDF

Each page on this site can be downloaded as a PDF for offline use or printing.

1. Navigate to the page you want to save.
2. Click the **download icon** (↓) in the top-right toolbar.
3. Select **".pdf"** from the dropdown.
4. Your browser's print dialog will open. Set the following options:
   - **Destination**: Save as PDF
   - **Paper size**: Letter
   - *Optional* Under **More settings**, uncheck **Headers and footers** to remove the URL and date from the printed page.
5. Click **Save**.


## Interactive coding notebooks
To interact with the coding tutorials presented here, navigate to the page with the tutorial (e.g.,  "Importing Labchart (Python)"). On these pages, you'll see a rocket 🚀 icon in the top right corner. Click on this, and choose Colab. This will launch Google Colab, where you can run the code in the notebook.

Alternatively, you can copy and paste the code you see here into a Python editor of your choice.

```
# Code blocks look like this!
# If you hover, there's an option to copy the contents.
```

**Note that only notebooks with code in them will have the option to open them in Colab.**

### Uploading data to Colab
To work with exported LabChart data in Python, you'll either need to upload the file to Colab or put it in Google Drive & mount your drive.

#### Option 1: Uploading directly
To upload a file, click the Directory icon on the left hand side of the window. Then, click the file upload button. There is a video of how to do this below:

<iframe width="640" height="364" src="https://www.loom.com/embed/830c178cc78447b68156cd8ff1423fb3?sid=218e6c4b-b93e-4ac3-a56a-b03cac1f4e3c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

#### Option 2: Mounting your drive
1. To mount your drive, click the Directory icon on the left hand side of the window.
2. Click the Google Drive icon.
3. Colab will create a new cell in the notebook and prompt you to run it.
4. If it's the first time, a separate window will pop up to ask you for access to your Drive.
5. Click "Allow".
6. After a few seconds, a message will print that your Drive has been mounted.
7. Now, you can use the location of your file in a filepath that starts with `/content/drive`.

### Saving work in Colab
You can save a Colab file that you've edited just like any other file! In Colab, go to `File > Save a copy in Drive`. These files will show up in a folder called "Colab Notebooks" in your Drive.