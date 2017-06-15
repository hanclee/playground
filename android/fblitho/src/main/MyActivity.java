import com.facebook.litho.ComponentContext;
import com.facebook.litho.LithoView;

public class MyActivity extends Activity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    
    final ComponentContext c = new ComponentContext(this);

    final LithoView lithoView = LithoView.create(
    	this /* context */, 
    	Text.create(c)
            .text("Hello, World!")
            .textSizeDip(50)
            .build());
    	
    setContentView(lithoView);
  }
}
