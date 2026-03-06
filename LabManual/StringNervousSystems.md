# Experiment #1: String Nervous Systems

## Background & Goals

### Why are we recording from a string?

The purpose of this lab is to get familiar with the recording equipment and software that we'll be using in this course.

First, we'll learn how you can configure LabChart 8 to acquire data and send out pulses of electricity. Then, you'll record the **stimulus artifact** (the passively conducted signal from the stimulus) from a saline-soaked piece of string. The string mimics some of the properties of the earthworm that you'll observe in a future experiment. This will give you the opportunity to learn how to use the stimulating and recording devices on the PowerLab, as well as reduce noise and stimulus artifacts from your recordings, before you actually have to do all of this in an experiment.

Asking questions during this lab is a great idea, and will help you succeed in future experiments.

**Today you will:**
- Configure a recording experiment in LabChart 8.
- Determine how to record signals from a string.
- Identify sources of electrical noise in your rig.

*This lab was adapted from Experiment #1 from the BIPN 105 & BIPN 145 Lab Manuals, as well as AD Instruments.*

---

## Lab Protocol

**Supplies**
- String
- Dissection tray
- PowerLab 26T, connected to computer
- Bio Amp
- Sewing pins (2)
- Faraday Cage
- Large Petri Dish
- Eyedropper (1)
- Scientific tape

**Cables & connectors**
- BNC to single banana adapter (2)
- BNC to double banana adapter
- BNC to DIN8 cord
- BNC to DIN8 adapter
- Banana plug cords (2)
- Alligator clip adapters (2)

**Solutions**
- Saline

---

### I. Preparation

#### Meet your PowerLab

First, it helps to get familiar with our equipment. Look for the following on your PowerLab. Items that are particularly important for our experiments are described below — make sure you know where these are, and what they do/indicate.

![PowerLab front panel diagram](images/powerlab_front.png)
*Image courtesy of ADInstruments ©*

1. **Power indicator light** — illuminates when the PowerLab is turned on
2. **Analog output connections** — provide a voltage output in the 10 V range. Note: This is NOT safe for direct connection to humans.
3. **Isolated Stimulator status light** — indicates if the Isolated Stimulator is working properly (green) or out of compliance (yellow)
4. **Bio Amp input** — connects a Bio Amp Cable to the PowerLab; reads as inputs 3 and 4 in LabChart 8
5. **Isolated Stimulator outputs** — for connecting stimulating electrodes to the Isolated Stimulator
6. **Isolated Stimulator switch** — turns on/off the Isolated Stimulator
7. **Inputs** — 8-pin DIN connectors for attaching electrodes and any input you'd like to measure
8. **Trigger input** — can be used to start or stop a recording event

![PowerLab rear panel diagram](images/powerlab_rear.png)
*Image courtesy of ADInstruments ©*

9. **Audio output connector** — standard phono jack for sound output
10. **Digital Output Connector**
11. **Earthing post** — used to ground the PowerLab, if grounded power supply is unavailable
12. **Power switch**
13. **Power cord connector**
14. **Digital Input Connector**
15. **USB connector** — connects computer to the PowerLab

---

#### Setting up LabChart 8

LabChart 8 is the software we'll be using to record electrophysiology data. It has already been downloaded on your lab computer. Before performing our experiment, we need to set up LabChart to acquire and display the data as we want.

1. Turn on the PowerLab 26T.
2. Open LabChart 8. You should see that the PowerLab is connected (don't worry if it tells you other devices are not connected).
3. Open a new experiment by choosing the **New** button (bottom left-hand corner).
4. First, we need to decide how many channels to record. Go to **Setup > Channel Settings**.
5. At the bottom of the window, change the number of channels to **3**, and make sure that they are all on (box on the left is checked).
6. Rename the first channel **"Stimulus"** and the second channel **"Raw Recording."**
7. Set the range for Channel 1 (your "Stimulus" channel) to **5 V**.
   > **Note:** The range determines the range of values the PowerLab will record, and when using the BioAmp (later in this lab), it will actually change the amplification.
8. Set the range for Channel 2 (your "Raw Recording" channel) to **100 mV**.
9. Make the sampling rate for Channel 1 **"40 k/s"** and ensure that *"Same sampling rate for all channels"* is checked.
10. Make sure that the far-right column says **"No calculation"** for all three channels.

---

#### Finding sources of electrical noise

One of the biggest issues in electrophysiology is noise from overhead lights and other electronics in the room. It'll help to get an understanding of where noise in your rig is coming from.

1. Connect a DIN8-BNC adapter and a double 3-way BNC adapter to **Input 2** of the PowerLab. Plug in a red banana cable to the positive (red) side of the connector.
2. Hold the lead (the end of the banana cable) in your hand.
3. In the Channel Settings window, click on **Input Amplifier** for Channel 2. The Input Amplifier window will show the voltage that you're recording. This allows for precise setting of the input range for a recording channel and provides filtering options.
4. The signal at your rig may be variable. To adjust the sensitivity of the channel, choose an appropriate range setting from the **Range** drop-down list in the Input Amplifier dialog.
   > **Note:** The number displayed in the range menu indicates the maximum input voltage currently selected. Notice how as you decrease the range the vertical scale changes and the small rhythmic deflections that appear on the signal trace increase in amplitude.
5. Choose a range such that your signal fills about ⅔ of the window.
6. Observe the change in the recorded voltage with the electrode lead held overhead (near the lights) and then near the ground (away from the lights).
7. Try the lead inside of your Faraday cage. Is the signal more or less noisy?
   > **Tip:** Is your Faraday cage actually grounded? How could you ground it?

:::{admonition} Questions for reflection
:class: tip
- How does the signal change as you move the electrode lead around?
- What do these sources of noise mean for our recording configuration, and our attempts to record electrical activity?
:::

---

#### Recording stimulator outputs

We'll use our PowerLab as a stimulator that can send voltage pulses into our specimen. We can change the timing, shape, amplitude, and repetition of these stimuli via the Stimulator window in LabChart. We'll directly record these stimuli by sending the output of the PowerLab into an input.

1. Change your view to **Scope view**, which looks like the sweeps of an oscilloscope. The advantage of Scope View is that it allows the overlay and averaging of your data.
2. In Scope view, set the **Duration** to **20 ms**. This changes how long each sweep of data is.
3. Remove the DIN8-BNC adapter & cable from Input 2.
4. On the PowerLab, connect the **(+) Output** to **Input 1** using the BNC to DIN8 cable.
5. Go to **Setup > Stimulator** to open the Stimulator window. This is the window where you can modify the shape, timing, and amplitude of the stimulus output.
6. Make sure that the **Waveform Name** is set to **Pulse**.
7. Change the range of the Pulse Height to **-5 to 5 V** by clicking the ruler button next to the Pulse Height option.
8. Configure the following by clicking and then editing the values in the window:

   | Parameter | Value |
   |---|---|
   | Start Delay | 1 ms |
   | Pulse Width | 0.1 ms |
   | Pulse Height | 0.150 V |

9. Close the Stimulator window.
10. Go to **Setup > Stimulator Panel** to open a smaller window where you can directly modify the stimulus. This window can stay open while you're recording.
11. Press **> Start** in the main LabChart GUI.
12. Increase the stimulator voltage (Pulse Height) and watch the level change in the window.
13. Try a negative stimulus voltage.
14. Open the Stimulator window again and vary the delay, duration, and waveform shape, and see what happens. If your recording is cut off, how can you fix it? *(Hint: see Visualization tips below.)*

---

:::{admonition} LabChart Visualization Tips
:class: note

**Vertical scaling**

The Scaling buttons are on the left side of each channel's Amplitude axis. The up button will double the vertical scale shown, and the down button will halve the vertical scale shown.

Right-clicking in the channel will show several options for displaying data:
- **Auto Scale Channel** — automatically adjusts the amplitude axis so the maximum value is just larger than the maximum value of visible data in this channel.
- **Show Points as Dots** — shows the individual points the PowerLab is sampling.
- **Equalize Channel Heights** — makes all data channels the same size.
- **Split View** — inserts a divider vertically in the data creating two separate scrollable regions (Chart View only).

**Horizontal Scaling**

The horizontal scroll bar provides the simplest way of moving backwards and forwards through your file. By using the **View Buttons** at the bottom right corner, you can compress or expand the Time axis to see more or less of a waveform. The left button will compress your data; the right button will expand it. If you select the ratio button, a pop-up menu appears in which you can choose the new compression directly.
:::

:::{admonition} Questions for reflection
:class: tip
- Why would you want to record the stimulus output?
- Why would you want to delay the stimulus output?
- Why would you want to send different shapes of waveforms?
:::

---

### II. Recording the stimulus artifact

Lastly, we'll add an amplifier (the BioAmp) to our circuit, and use this to record from a string soaked in saline. The string doesn't have a nervous system, but we'll add some voltage with our stimulator and observe the change in voltage from another point on the string.

#### Set up your string stimulation experiment

Your setup for the string stimulation will look like this:

![String stimulation setup diagram](images/string_setup.png)
*Image courtesy of ADInstruments ©*

1. Remove all of the cords from the PowerLab.
2. Connect your two single BNC to banana cable adapters into the **(+)** and **(-)** Outputs of the PowerLab.
   > **Note:** The color of these does not matter, but it can help to be consistent — red for the anode (+ Output) and black for the cathode (- Output).
3. Using banana cables, connect the **(+) Output** to your **anode** stimulating electrode (the sewing pin) and the **(-)  Output** to the **cathode** stimulating electrode.
4. Connect the BioAmp to the PowerLab.
5. Connect the (+) recording, (-) recording, and ground needle electrodes to your string and into the corresponding spots on the BioAmp.
   > **Note:** The colors on the BioAmp defy convention — consult the diagram above for clarity.
6. Change the configuration of your recording so that you are now using the BioAmp:
   - Go into **Setup > Channel Settings**.
   - Make sure that **BioAmp** is listed under the Input Amplifier column for Channel 3.
   - **Uncheck** Channel 2 — we don't need to record from it anymore.
   - Change the name of Channel 3 to **"BioAmp Recording."**
7. We've removed our ability to directly record the stimulus output, so we need another way to know when the stimulator sends outputs. Open the Stimulator Settings and set the **"Marker Channel"** to Ch1 (your "Stimulus" channel). With this setting, LabChart will put a small tick on Channel 1 to show you when the stimulus was sent.

---

#### Stimulate your string!

1. Place your string in saline in the small petri dish, and give it a few minutes to soak. If it's not completely soaked, you will not get a stimulus artifact.
   > **Note:** If your string dries out during the experiment, you can use an eyedropper to add saline to it.
2. Set the stimulator voltage to **1 V**, and press **> Start**. You should see your stimulus recording on Channel 1, as you did before, but you should also now have a recording on Channel 3 (BioAmp Recording).
3. Change the scaling if you cannot see the entire deflection.
4. If you do not see anything, increase the voltage (no more than 5 V).
   > **Note:** This recorded deflection is called the **stimulus artifact**. This artifact can exceed the range of our amplifier. Recovery from the artifact should be rapid, however, so that the baseline is reached within one millisecond or so after the stimulus pulse.

> *Is the amplitude of the stimulus artifact the same as the amplitude of the stimulus? Why or why not?*

5. Increase the stimulator voltage, and stimulate again. What happens?
   > **Note:** Change the name of Scope pages, or make comments on the recording, to indicate what you've done during that run of the stimulus. You need to know the metadata for the experiment once you're ready to export.
6. Change the stimulus to a **negative voltage**, and stimulate again. Does the stimulus artifact change?
7. Choose one of your pages where you have a stimulus artifact with a clear peak. Using the **Marker tool** (see box below), measure the latency from the stimulus to the beginning of your artifact. How much of a delay is there? How much of a delay *should* there be? (How fast does an electrical current flow?)
8. Change the location of the stimulating electrodes. How does this change the shape of the artifact?
9. Remove the ground electrode. How does this change your recording?

:::{admonition} Using the Marker Tool
:class: note
The **Marker** is located at the bottom left of the Chart View and can be dropped on any part of the waveform to allow relative measurements to be made. If you move the Marker to the data trace in Chart View, it will be placed on the same spot in the Scope View, and vice versa.

Drag the Marker from the Marker Box to a location on the trace and release. The Marker does not have to be placed exactly on the waveform; it will attach itself to the waveform at the time position you dropped it.

When the Marker is in use, the amplitude and time values displayed are **relative to the marked reference point**. This means the time and amplitude values are now displayed as differences (Δ) between the Waveform Cursor and the Marker. This is very useful for measuring the time between events or measuring the relative amplitudes of parts of a waveform.
:::

---

### III. Save your file & export your data

LabChart buffers files to disk in case of a power failure or computer crash, but it's wise to save work frequently. Saving files in LabChart is the same as saving any file on your personal computer.

We recommend keeping your LabChart files in your Google Drive folder or another cloud source that you can easily access.

1. Save the **settings file** for your experiment by going to **File > Save As Settings File** in LabChart. Save it in a safe place (not locally on the computer). You will need this settings file for the earthworm experiment.
2. Save the **data file** for your experiment by going to **File > Save As** and save as a LabChart Data File (*.adicht*).
3. Go to the Scope page for **two of your favorite string stimulation experiments** that you can compare and contrast — for example, two different voltages, or with two different distances between the stimulator and recording electrodes.
4. Follow these instructions for exporting your data into Excel: [http://bit.ly/BIPN145_export](http://bit.ly/BIPN145_export)
5. Plot your recordings (separately or on the same axes — be sure to label two different recordings if overlaid). Make sure your axes are labeled with units.
6. Copy your plots into a Word or Google document.
7. In 1–2 sentences, write a **figure caption** that describes your plot and the comparison you're making.
8. Upload your document to the assignment on Canvas (one plot per lab group). Include:
   - Group member names
   - Labeled axes
   - Figure caption

---

### Troubleshooting

| Observation | Likely issue | Possible solution |
|---|---|---|
| You can see the stimulus marker on Channel 1, but no stimulus artifact on Channel 3 | Your string may not be soaked in saline well enough | Add saline to the string |
| The recording trace is cut off | Your visualization needs to be re-scaled, or your range is too small | Right-click on channel and choose Auto Scale (see Visualization tips above); change the range on your recording channel |
| Your string recording trace has clear 60 Hz noise | You're not grounded, or there are ground loops | Make sure your Faraday cage and ground electrode are both grounded to the back of the PowerLab. If this doesn't help, consult an instructor. |
