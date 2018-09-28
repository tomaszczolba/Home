using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Home.Models;
using System.IO;

namespace Home.Controllers
{
  [Route("api/[controller]")]
  public class VideoController : Controller
  {
    [HttpGet("[action]")]
    public IEnumerable<Video> List()
    {
      List<Video> files = new List<Video>();
      DirectoryInfo dirInfo = new DirectoryInfo(@"E:\Moje\Filmy");

      foreach (FileInfo fInfo in dirInfo.GetFiles())
      {
        files.Add(new Video() {
          Name = fInfo.Name,
          Path = fInfo.FullName
        });
      }

      return files.ToList();
    }
  }
}