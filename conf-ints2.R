library(gplots)

nums = read.csv('experiment-fccd0-export.csv', header=TRUE)

plotmeans(len ~ Accuracy, data = nums, frame = FALSE, mean.labels = TRUE, connect = FALSE)

