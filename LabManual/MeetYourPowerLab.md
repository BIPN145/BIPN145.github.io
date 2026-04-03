# Lab #1: String Nervous Systems

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

| **Supplies** | **Cables & connectors** | **Solutions** |
|---|---|---|
| String | BNC to single banana adapter (2) | Saline |
| Dissection tray | BNC to double banana adapter | |
| PowerLab 26T, connected to computer | BNC to DIN8 adapter | |
| BioAmp | Alligator clip adapters (2) | |
| Sewing pins (2) | Banana plug cords (2) | |
| Faraday Cage |  | |
| Large Petri Dish | | |
| Eyedropper | | |

---

### I. Preparation

#### Meet your PowerLab

First, it helps to get familiar with our equipment. Look for the following on your PowerLab. Items that are particularly important for our experiments are described below — make sure you know where these are, and what they do/indicate.

![PowerLab front panel diagram](images/powerlab_front.png)

1. **Power indicator light** — illuminates when the PowerLab is turned on
2. **Analog output connections** — provide a voltage output in the 10 V range. Note: This is NOT safe for direct connection to humans.
3. **Isolated Stimulator status light** — indicates if the Isolated Stimulator is working properly (green) or out of compliance (yellow)
4. **Bio Amp input** — connects a Bio Amp Cable to the PowerLab; reads as inputs 3 and 4 in LabChart 8
5. **Isolated Stimulator outputs** — for connecting stimulating electrodes to the Isolated Stimulator
6. **Isolated Stimulator switch** — turns on/off the Isolated Stimulator
7. **Inputs** — 8-pin DIN connectors for attaching electrodes and any input you'd like to measure
8. **Trigger input** — can be used to start or stop a recording event
9. **Audio output connector** — standard phono jack for sound output
10. **Digital Output Connector**
11. **Earthing post** — used to ground the PowerLab, if grounded power supply is unavailable
12. **Power switch**
13. **Power cord connector**
14. **Digital Input Connector**
15. **USB connector** — connects computer to the PowerLab

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


:::{admonition} Using the Marker Tool
:class: note
The **Marker** is located at the bottom left of the Chart View and can be dropped on any part of the waveform to allow relative measurements to be made. If you move the Marker to the data trace in Chart View, it will be placed on the same spot in the Scope View, and vice versa.

Drag the Marker from the Marker Box to a location on the trace and release. The Marker does not have to be placed exactly on the waveform; it will attach itself to the waveform at the time position you dropped it.

When the Marker is in use, the amplitude and time values displayed are **relative to the marked reference point**. This means the time and amplitude values are now displayed as differences (Δ) between the Waveform Cursor and the Marker. This is very useful for measuring the time between events or measuring the relative amplitudes of parts of a waveform.
:::