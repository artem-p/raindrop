import cfgrib
import xarray as xr
import matplotlib.pyplot as plt

#   https://docs.xarray.dev/en/stable/examples/ERA5-GRIB-example.html
#   https://stackoverflow.com/questions/67963199/xarray-from-grib-file-to-dataset

ds = xr.load_dataset("gfs.f000.grb2", engine="cfgrib")

ds = ds - 273.15
ds.t[0].plot(cmap=plt.cm.coolwarm)
ds.t[0].show()