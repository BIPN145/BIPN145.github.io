# Day 1 Lab Orientation — TA Grading Guide

This guide collects every photo/video deliverable from the Day 1 Lab Orientation scavenger hunt, in order, with a few things to check for each. **This file is for instructional staff only — it is not part of the published site.**

## Part 1: Hardware & Software Scavenger Hunt

### 1A. Photo/screenshot of LabChart configured as described
> *"By default, LabChart prepares to record from too many channels... change Number of Channels to 1... Rename the channel 'Raw Recording'."*

- [ ] Channel Settings shows exactly 1 active channel, with the others turned off
- [ ] That channel is checked/enabled (not just present but disabled)
- [ ] The channel has been renamed to "Raw Recording" (not left at the default name)

### 1B. Photo of the Cables and Connections Cheat Sheet
> *"Find the Cables and Connections Cheat Sheet hanging on the wall near your bench."*

- [ ] Photo is of the physical cheat sheet at their own bench
- [ ] Image is legible (not blurry or taken from too far away)

### 1B. Photo of the front of the PowerLab in this configuration
> *DIN8-BNC adaptor → single female banana plug BNC adaptor → banana cable, plugged into Input 1.*

- [ ] DIN8-BNC adaptor is connected to **Input 1** specifically, not another port
- [ ] The full chain (DIN8 → BNC adaptor → banana cable) is visible and traceable in the photo
- [ ] DIN8 pins don't look twisted/bent (they're fragile — worth a quick visual check)

### 1C. Photo of the grounding post on the back of the PowerLab
> *"Take a photo of the grounding post on the back of your PowerLab."*

- [ ] Photo is taken from the rear panel, not the front
- [ ] The grounding post specifically is identifiable in the shot (not just a generic back-panel photo)

### 1C. Photo of ~0.1 seconds of the noise recording
> *"Adjust the horizontal scale... so you can see 0.1-0.2 seconds of the recording. Count the number of peaks (or troughs) in 0.1 second."*

- [ ] Time scale is actually zoomed to roughly 0.1–0.2 seconds, not a wide/full view
- [ ] Multiple full oscillation cycles (peaks and troughs) are visible in that window
- [ ] The trace looks like rhythmic electrical noise (regular oscillation), not a flat line or a clipped signal — this is what they'll use to answer the frequency question

### 2A. Photo of toolboxes with parts returned to original locations
> *"Remove all of the cords from the PowerLab and disassemble the parts before returning them to their original location."*

- [ ] All supplies from the list are present (adaptors, cables, electrodes, gel, alcohol pads, marker, etc.)
- [ ] Items are reasonably organized, not just piled in
- [ ] Photo is clear enough to actually verify contents

## Part 2: Recording EMG Signals

### 2C. Autoscaled signal, photo after the light + larger contraction
> *"Repeat step 2, but this time try to make the EMG signal larger in amplitude... Right click to Autoscale your signal and take a photo."*

- [ ] Trace shows a clear EMG burst (a spike of activity), not a flat or noise-only line
- [ ] Y-axis is genuinely autoscaled to fit the signal — not clipped at top/bottom, and not mostly empty space
- [ ] There's a visible amplitude difference between the light and larger contraction, consistent with the instruction to increase amplitude on the second attempt

### 2C. Photo of the sample-duration (5 s) setting window
> *"Set the sample duration to 5 s. Take a photo of the window in LabChart where you can set the sample duration."*

- [ ] Screenshot shows the actual sample-duration/block-length dialog, not just the general Scope View
- [ ] The value is explicitly set to 5 seconds
- [ ] Confirms they're in **Scope View**, not Chart View — a common mix-up

### 2C. Photo of the three named recordings
> *"Record 3 5-second sweeps of data and name each page in Scope View: Relaxed, Gentle fist, Clenched fist."*

- [ ] All three pages exist and are individually and correctly labeled (Relaxed / Gentle fist / Clenched fist)
- [ ] Amplitude increases progressively across the three, matching the labels (a rough sanity check that the labels are accurate, not swapped)
- [ ] "Overlay" is unchecked, so each recording is shown as its own separate page rather than all stacked together

### 2C. Photo of the Marker Tool peak-to-trough measurement
> *"In the Clenched Fist recording... measure the height of your largest EMG wave from peak to trough."*

- [ ] Marker is placed at the true tallest peak of the Clenched Fist recording, not an arbitrary point
- [ ] The Δ (delta) readout in the top right is visible and shows a real, non-zero voltage/time value
- [ ] Measurement was taken on the **Clenched Fist** recording specifically, as instructed

### 2C. Photo of the signal "out of range"
> *"Adjust the range so your signal goes 'out of range'. Take a photo of your signal."*

- [ ] Trace is visibly clipped/flattened at the top and/or bottom — genuinely out of range, not just a normal-looking trace
- [ ] It's clear this was an intentional range change (e.g. range setting visible or referenced), not an accidental miscalibration

### 2C. Video of the trace at 20 samples/sec
> *"Reduce the sampling rate of your recording to 20/s and take a video of your recorded trace."*

- [ ] Sampling rate is confirmably set to 20/s before recording
- [ ] The trace shows visible distortion from undersampling (jagged/stair-stepped or misleadingly slow-looking), rather than a normal smooth EMG signal
- [ ] Submission is an actual video (not a still photo) — a static shot won't demonstrate the live aliasing effect

---

*Extracted from `LabOrientation.md`. If the scavenger hunt tasks change, re-check this guide against the source file.*
