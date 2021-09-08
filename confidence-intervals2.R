library(plotly)

data <- read.csv(results)

df <- data.frame(x = 1:3,
                 y = 1:3,
                 ymin = (1:3) - runif(3),
                 ymax = (1:3) + runif(3),
                 xmin = (1:3) - runif(3),
                 xmax = (1:3) + runif(3))

p <- ggplot(results, data = df,aes(x = x, y = y)) + 
  geom_point() + 
  geom_errorbarh(aes(xmin = xmin,xmax = xmax))


p <- ggplotly(p)

p

library(ggplot2)
library(tidyverse)
install.packages(Hmisc)
library(Hmisc)

results %>% ggplot(aes(y=Log.Error, x=Visualization)) +
  stat_summary(fun.data = "mean_cl_boot", colour = "red", size = 0.7) +
  coord_flip()

