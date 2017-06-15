public class MyApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    
    SoLoader.init(this, false);
  }
}
