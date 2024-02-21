import os

import cfgrib
import xarray as xr
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy


#   https://docs.xarray.dev/en/stable/examples/ERA5-GRIB-example.html
#   https://stackoverflow.com/questions/67963199/xarray-from-grib-file-to-dataset

file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'gfs.f000.grb2')
ds = xr.load_dataset(file_path, engine="cfgrib")

ds = ds - 273.15

fig = plt.figure(figsize=(10, 10))
axes = plt.axes(projection=ccrs.Robinson())
axes.coastlines(resolution='10m')
plot = ds.t.plot(cmap=plt.cm.coolwarm, transform=ccrs.PlateCarree(), cbar_kwargs={"shrink": 0.6})
plt.show()