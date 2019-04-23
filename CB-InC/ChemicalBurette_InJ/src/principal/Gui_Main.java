package principal;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.Color;
import javax.swing.border.MatteBorder;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import javax.swing.SwingConstants;
import java.awt.Cursor;

public class Gui_Main extends JFrame {
	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	/**
	 * Lanza la aplicacion principal.
	 */
	public static void main(String[] args) {
					Gui_Main frame = new Gui_Main();
					frame.setVisible(true);
	}

	public Gui_Main() {
		setUndecorated(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 835, 509);
		contentPane = new JPanel();
		contentPane.setBackground(new Color(255, 255, 255));
		/*ESTO SOLO SE QUEDA EN FACE BETA, NO FUNCIONAL A LA HORA DE COLOCAR COMPONENTES.*/
		contentPane.addMouseListener(new MouseAdapter() {
			public void mouseClicked(MouseEvent e) {
				System.exit(0);
			}
		});
		/*ESTO SOLO SE QUEDA EN FACE BETA, NO FUNCIONAL A LA HORA DE COLOCAR COMPONENTES.*/
		contentPane.setBorder(new MatteBorder(1, 1, 1, 1, (Color) new Color(40,220,209)));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JPanel dashboard = new JPanel();
		dashboard.setBackground(new Color(19,179,201));
		dashboard.setBounds(0, 0, 196, 509);
		contentPane.add(dashboard);
		dashboard.setLayout(null);
		
		JButton logo = new JButton(" ");
		logo.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
		logo.setHorizontalTextPosition(SwingConstants.CENTER);
		logo.setIconTextGap(-10);
		logo.setToolTipText("Inicio");
		logo.setIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/logo_4.png")));
		logo.setRolloverSelectedIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/logo_4.png")));
		logo.setRolloverIcon(new ImageIcon(Gui_Main.class.getResource("/recursos/logo_4.png")));
		logo.setFocusable(false);
		logo.setContentAreaFilled(false);
		logo.setBorderPainted(false);
		logo.setBounds(1, 1, 40, 45);
		dashboard.add(logo);
	}
}
